const express = require("express");
const Shelter = require("../models/Shelter");

const router = express.Router();

console.log("SHELTER ROUTES FILE LOADED");

router.get("/shelters/:city", async (req, res) => {

    try {

        const city = req.params.city;

        const shelters = await Shelter.find({ city: city });

        res.status(200).json(shelters);

    } catch (error) {

        console.log(error);

        res.status(500).json({
            message: "Server error"
        });
    }
});

module.exports = router;