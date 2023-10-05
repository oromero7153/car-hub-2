const express = require('express');
const cors = require ('cors');
const app = express()
const mongoose = require('mongoose');

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb+srv://oromero7153:IEwmgfAwAxFSGbPw@rest-rant.kxwtiyy.mongodb.net/car-hub")

app.use('/', require('./routes/addRideRoute'))

app.listen(4000, function(){
    console.log('server is running on port 4000');
})