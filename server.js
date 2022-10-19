const express = require ('express');
const cors = require ('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 2001;

app.use(cors());
app.use(express.json());

const uri = "mongodb+srv://haritha:iNTmeeAf1V1zpCxk@cluster0.trwb92y.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(uri, { useUnifiedTopology: true, useNewUrlParser: true });

const connection = mongoose.connection;

connection.once('open', () => {
    console.log("DB connected");
})

const userRouter = require('./routes/users');
const authRouter = require('./routes/auth');
const districtRouter = require('./routes/districts');
const patientRouter = require('./routes/patients');
const hospitalRouter = require('./routes/hospitals');
const operationsRouter = require('./routes/operations');
const doctorsRouter = require('./routes/doctors');
const illnessRouter = require('./routes/ilnessReport');
const chartRouter = require('./routes/chart');


app.use('/api/users',userRouter);
app.use('/api/auth',authRouter);
app.use('/api/districts',districtRouter);
app.use('/api/patients',patientRouter);
app.use('/api/hospitals',hospitalRouter);
app.use('/api/operations',operationsRouter);
app.use('/api/doctors',doctorsRouter);
app.use('/api/illnesses',illnessRouter);
app.use('/api/operations/chart',chartRouter);

app.listen(port, ()=>{
    console.log(`Server is running on port : ${port}`);
})
