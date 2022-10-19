const auth = require('../middleware/auth');
const jwt = require('jsonwebtoken');
const config = require('config');
const bcrypt = require('bcrypt');
const _ = require('lodash');
const User = require('../Models/users');
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();
const Joi = require('joi');
const users = require('../Models/users');

router.get('/', auth, async (req, res) => {
    // const user = await User.findById(req.user._id).select('-password');
    // res.send(user);
    console.log("TESTING")
    res.send('we are at home');
});
 
router.post('/', async (req, res) => {
    console.log(req.body);

    const schema = Joi.object({
        name: Joi.string().min(5).max(50).required(),
        email: Joi.string().min(5).max(255).required(),
        password: Joi.string().min(5).max(255).required()
    });
    const result = schema.validate(req.body);
    if (result.error) {
        console.log(result.error)
        res.status(400).send(result.error.details[0].message)
    }
    let user = await User.find({ email: req.body.email });
    console.log(user);
    if (user == "") 
    {
        
        user = new User(_.pick(req.body, ['name', 'email', 'password']));
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(user.password, salt);
        await user.save();
    
        const token = user.generateAuthToken();
        res.header('x-auth-token', token).send(_.pick(user, ['_id', 'name', 'email']));
       
    }
    else
    {
        
        return res.status(400).send('User has already registered.');
    }
});

module.exports = router; 
