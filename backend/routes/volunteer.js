const express = require("express");
const Volunteer = require("../models/Volunteer");

const router = express.Router();
console.log("VOLUNTEER ROUTES FILE LOADED");
router.post("/volunteers", async (req, res) => {

    try {

        const {
            name,
            email,
            phone,
            familyPhone,
            bloodGroup,
            preferredLocation,
            availability,
            skills,
            areaOfInterest
        } = req.body;

        const newVolunteer = new Volunteer({
            name,
            email,
            phone,
            familyPhone,
            bloodGroup,
            preferredLocation,
            availability,
            skills,
            areaOfInterest
        });

        await newVolunteer.save();

        res.status(201).json({
            message: "Volunteer registration successful!"
        });

    } catch (error) {

        console.log(error);

        res.status(500).json({
            message: "Server error"
        });
    }
});

module.exports = router;