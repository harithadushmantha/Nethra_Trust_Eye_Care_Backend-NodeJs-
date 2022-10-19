const Joi = require('joi');
const express = require('express');
const router = express.Router();
const Patients = require('../Models/Patients');
const Districts = require('../Models/districts');
Joi.objectId = require('joi-objectid')(Joi)

router.get('/', async (req, res)=>{
    try {
        
        const patients =  await Patients.find();
        let data = 
        {
            content : patients,
            total : patients.length
        }
        res.json(data);
    } catch (error) {
        
    }
});
router.post('/', async (req,res) =>{
    console.log(req.body);
    /*const schema = Joi.object({
        name: Joi.string().min(3).max(30).required(),
        electionSeatId: Joi.objectId().required(),
    });
    const result = schema.validate(req.body)
    if(result.error){
        console.log(result.error)
        res.status(400).send(result.error.details[0].message)
    };*/

    const district = await Districts.findById(req.body.districtId);
    console.log(district.id);
    let patient = new Patients({
  
        nic: req.body.id,
        title: req.body.title,
        name: req.body.name,
        districtId: {
            _id: district._id,
            name: district.name
        },
        gender : req.body.gender,
        phone : req.body.phone,
        dob: req.body.dob,
        username : req.body.username,
        password : req.body.password,
        registeredDate : Date.now() 
    });
    
    patient = await patient.save();
    res.send(patient);
     
});
module.exports = router;