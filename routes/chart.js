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
    
    const operationsJan = await Operations.find({date :{$gte: "2022-01-01", $lte: "2022-02-01"}  });
    const operationsFeb = await Operations.find({date :{$gte: "2022-02-01", $lte: "2022-03-01"}  });
    const operationsMar = await Operations.find({date :{$gte: "2022-03-01", $lte: "2022-04-01"}  });
    const operationsApr = await Operations.find({date :{$gte: "2022-04-01", $lte: "2022-05-01"}  });
    const operationsMay = await Operations.find({date :{$gte: "2022-05-01", $lte: "2022-06-01"}  });
    const operationsJun = await Operations.find({date :{$gte: "2022-06-01", $lte: "2022-07-01"}  });
    const operationsJul = await Operations.find({date :{$gte: "2022-07-01", $lte: "2022-08-01"}  });
    const operationsAug = await Operations.find({date :{$gte: "2022-08-01", $lte: "2022-09-01"}  });
    const operationsSep = await Operations.find({date :{$gte: "2022-09-01", $lte: "2022-10-01"}  });
    const operationsOct = await Operations.find({date :{$gte: "2022-10-01", $lte: "2022-11-01"}  });
    const operationsNov = await Operations.find({date :{$gte: "2022-11-01", $lte: "2022-12-01"}  });
    const operationsDec = await Operations.find({date :{$gte: "2022-12-01", $lte: "2023-01-01"}  });
   
    let data = {
       operationsJan,
       operationsFeb,
       operationsMar,
       operationsApr,
       operationsMay,
       operationsJun,
       operationsJul,
       operationsAug,
       operationsSep,
       operationsOct,
       operationsNov,
       operationsDec
        
    };
    res.json(data);
  } catch (error) {}
});
module.exports = router;