const Joi = require('joi');
const bcrypt = require('bcrypt');
const _ = require('lodash');
const Doctors = require('../Models/doctor');
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();

router.post('/', async (req, res) => {
    /*const schema = Joi.object({       
        email: Joi.string().min(5).max(255).required(),
        password: Joi.string().min(5).max(255).required()
    });*/
    /*const result = schema.validate(req.body);
    if (result.error) {
        console.log(result.error)
        res.status(400).send(result.error.details[0].message)
    }*/
    let doctor = await Doctors.findOne({ username: req.body.username });
    if (!doctor) return res.status(400).send('Invalid username or password.');
  
    const validPassword = await bcrypt.compare(req.body.password, doctor.password);
    if (!validPassword) return res.status(400).send('Invalid email or password.');
  
    const token = doctor.generateAuthToken();
    res.send(token);
  });

  module.exports = router; 