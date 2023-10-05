const express = require('express');
const router = express.Router();
const  Rides = reuire ("../models/schemas");

router.route("/addrides").post((req, res) => {
    const brand = req.body.brand;
    const model = req.body.model;
    const newRide = new Rides ({
        brand, 
        model
    });

    newRide.save()
})

module.exports = router;