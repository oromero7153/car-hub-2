const mongoose = require('mongoose');

const addRideSchema = {
    brand: String,
    model: String,
}

const Rides = mongoose.model("Rides", addRideSchema)

module.exports = Rides;