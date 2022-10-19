const express = require('express');
const auth = require('../middleware/auth');
const router = express.Router();
const Doctors = require ('../Models/doctor');

const jwt = require('jsonwebtoken');
const config = require('config');
const bcrypt = require('bcrypt');
const _ = require('lodash');
const mongoose = require('mongoose');

const Joi = require('joi');

router.get('/',async (req,res) =>{
    try {
        const doctors = await Doctors.find()
        res.json(doctors)
    } catch (error) {
        
    }
});

router.post('/', async (req, res) => {
    console.log(req.body);

    /*const schema = Joi.object({
        name: Joi.string().min(5).max(50).required(),
        email: Joi.string().min(5).max(255).required(),
        password: Joi.string().min(5).max(255).required()
    });
    const result = schema.validate(req.body);
    if (result.error) {
        console.log(result.error)
        res.status(400).send(result.error.details[0].message)
    }*/
    let doctor = await Doctors.find({ email: req.body.email });
    console.log(doctor);
    if (doctor == "") 
    {
        
        doctor = new Doctors(_.pick(req.body, ['name','username', 'password','email','phone' ]));
        const salt = await bcrypt.genSalt(10);
        doctor.password = await bcrypt.hash(doctor.password, salt);
        await doctor.save();
    
        const token = doctor.generateAuthToken();
        res.header('x-auth-token', token).send(_.pick(doctor, ['_id', 'name','username', 'email','phone']));
       
    }
    else
    {
        
        return res.status(400).send('Doctor has already registered.');
    }
});
module.exports = router;  

/*router.get('/',async (req,res) =>{
    try {
        const doctors = await Doctors.find()
        res.json(doctors)
    } catch (error) {
        
    }
});

router.post('/', async (req,res) =>{
    console.log(req.body);
    let doctor = new Doctors({
        name: req.body.name,
        phone: req.body.phone
    });
    
    doctor = await doctor.save();
    res.send(doctor);
     
});*/