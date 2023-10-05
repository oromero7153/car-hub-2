const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose')

app.use(cors());
app.use(express.json())

mongoose.connnect('mongodb+srv://oromero7153:HaqihnOopgXJbHnO@rest-rant.kxwtiyy.mongodb.net/carhub?retryWrites=true&w=majority')

app.use('/', require("./routes/addRideRoute"));

app.listen(3001, function(){
    console.log('express server is running on port 3001')
})

