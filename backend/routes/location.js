const express = require("express");
const Location = require("../models/Location");

const router = express.Router();

router.get("/locations", async (req, res) => {

    try {

        const locations = await Location.find();

        res.status(200).json(locations);

    } catch (error) {

        console.log(error);

        res.status(500).json({
            message: "Server error"
        });
    }
});

module.exports = router;