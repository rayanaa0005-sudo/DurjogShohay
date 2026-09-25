const express = require("express");
const ShelterLocation = require("../models/ShelterLocation");

const router = express.Router();

router.get("/shelter-locations", async (req, res) => {

    try {

        const locations = await ShelterLocation.find();

        res.status(200).json(locations);

    } catch (error) {

        console.log(error);

        res.status(500).json({
            message: "Server error"
        });
    }
});

module.exports = router;