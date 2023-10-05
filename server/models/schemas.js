const mongoose = require('mongoose');
const addRidesSchema = {
    brand: String,
    model: String,
}
 const Rides = mongoose.model("Ride", addRidesSchema);

 module.exports= Rides;