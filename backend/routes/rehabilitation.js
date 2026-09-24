const express = require("express");
const Rehabilitation = require("../models/Rehabilitation");

const router = express.Router();

// POST a rehabilitation request
router.post("/", async (req, res) => {
    try {
        const { location, help, description } = req.body;

        if (!location || !help || !description) {
            return res.status(400).json({
                message: "All fields are required"
            });
        }

        const newRequest = new Rehabilitation({
            location,
            help,
            description
        });

        await newRequest.save();

        res.status(201).json({
            message: "Rehabilitation request posted successfully!",
            request: newRequest
        });

    } catch (error) {
        console.log(error);

        res.status(500).json({
            message: "Server error"
        });
    }
});

// GET all rehabilitation requests
router.get("/", async (req, res) => {
    try {
        const requests = await Rehabilitation.find();

        res.status(200).json(requests);

    } catch (error) {
        console.log(error);

        res.status(500).json({
            message: "Server error"
        });
    }
});

module.exports = router;