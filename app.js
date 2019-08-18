//load app server using express
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors')
require('dotenv/config');

app.use(cors());
app.use(bodyParser.json());

//Import routes
const carsRoute = require('./routes/cars');
app.use('/cars', carsRoute);

app.get('/', (req, res) =>{
    res.send("Home Page");
});

//DB connection 
mongoose.connect(process.env.DB_url, { useNewUrlParser: true }, () =>{
    console.log("connected to db");
});

// localhost:3000
app.listen(3000);