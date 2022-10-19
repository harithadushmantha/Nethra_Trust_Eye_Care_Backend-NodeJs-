const express = require('express');
const router = express.Router();
const Hospitals = require ('../Models/hospitals');

router.get('/',async (req,res) =>{
    try {
        const hospitals = await Hospitals.find()
        res.json(hospitals)
    } catch (error) {
        
    }
});

router.post('/', async (req,res) =>{
    console.log(req.body);
    let hospital = new Hospitals({
        name: req.body.name,
        phone: req.body.phone
    });
    
    hospital = await hospital.save();
    res.send(hospital);
     
});
module.exports = router;  