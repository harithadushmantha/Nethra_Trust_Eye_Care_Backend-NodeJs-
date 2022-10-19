const Joi = require("joi");
const express = require("express");
const router = express.Router();
const Patients = require("../Models/Patients");
const Doctors = require("../Models/doctor");
const Illnesses = require("../Models/illnessReport");
Joi.objectId = require("joi-objectid")(Joi);

router.get("/", async (req, res) => {
  try {
    const illnesses = await Illnesses.find();
    let data = {
        content: illnesses,
        total: illnesses.length,
      };
      res.json(data);
  } catch (error) {}
});
router.post("/", async (req, res) => {
  console.log(req.body);
   
  //var query = {nic: req.body.patientId}
  const patient = await Patients.findById(req.body.patientId);
  const doctors = await Doctors.findById(req.body.doctorId);
    console.log(patient.nic)
  let illnesses = new Illnesses({
    patient: {
      nic: patient.nic,
      title: patient.title,
      name: patient.name,
      districtId: {
        _id: patient.districtId._id,
        name: patient.districtId.name
      },
      gender: patient.gender,
      phone: patient.phone,
      dob: patient.dob,
      username: patient.username,
      password: patient.password,
      registeredDate: patient.registeredDate,
    },
    doctor : {
        _id: doctors._id,
        name: doctors.name,
        phone : doctors.phone
    },
    leftVisualAccuaracy: req.body.leftVisualAccuaracy,
    rightVisualAccuaracy:req.body.rightVisualAccuaracy,
        
      IPD: req.body.IPD,
      IOP: req.body.IOP,
      reflectiveErrorType:req.body.reflectiveErrorType,
      hypertension:req.body.hypertension,
      leftCatract:req.body.leftCatract,
      rightCatract: req.body.rightCatract,
      glaucoma:req.body.glaucoma,
      sprint: req.body.sprint,
      diabetics: req.body.diabetics,
      cardiac:req.body.cardiac
  });

  illnesses = await illnesses.save();
  res.send(illnesses);
});
module.exports = router;
