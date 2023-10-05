const express = require('express');
const router = express.Router();
const Rides = require('../models/addRide')

router.route('/addrides').post((req, res)=>{
    const brand = req.body.brand;
    const model = req.body.model;
    const newRide = Rides({
        brand,
        model,
    });
    newRide.save();
})

module.exports = router;