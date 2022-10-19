const Joi = require("joi");
const express = require("express");
const router = express.Router();
const Patients = require("../Models/Patients");
const Districts = require("../Models/districts");
const Hospitals = require("../Models/hospitals");
const Operations = require("../Models/operations");
Joi.objectId = require("joi-objectid")(Joi);

router.get("/", async (req, res) => {
  try {
    const operations = await Operations.find();
    let data = {
      content: operations,
      total: operations.length,
    };
    res.json(data);
  } catch (error) {}
});
router.post("/", async (req, res) => {
  console.log(req.body);
   
  var query = {nic: req.body.patientId}
  const patient = await Patients.find(query);
  const district = await Districts.findById(req.body.districtId);
  const hospital = await Hospitals.findById(req.body.hospitalId);
  console.log(patient[0]);
  let operation = new Operations({
    patient: {
      nic: patient[0].nic,
      title: patient[0].title,
      name: patient[0].name,
      districtId: {
        _id: patient[0].districtId._id,
        name: patient[0].districtId.name
      },
      gender: patient[0].gender,
      phone: patient[0].phone,
      dob: patient[0].dob,
      username: patient[0].username,
      password: patient[0].password,
      registeredDate: patient[0].registeredDate,
    },
    payType : req.body.payType,
    hospital : {
        _id: hospital._id,
        name: hospital.name,
        phone : hospital.phone
    },
    date : req.body.date,
    eye : req.body.eye,
    status : req.body.status
  });

  operation = await operation.save();
  res.send(operation);
});
module.exports = router;
