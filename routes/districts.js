const express = require('express');
const router = express.Router();
const Districts = require ('../Models/districts');

router.get('/',async (req,res) =>{
    try {
        const district = await Districts.find()
        res.json(district)
    } catch (error) {
        
    }
});

router.post('/', async (req,res) =>{
    console.log(req.body);
    let district = new Districts({
        name: req.body.name
    });
    
    district = await district.save();
    res.send(district);
     
});
module.exports = router;  