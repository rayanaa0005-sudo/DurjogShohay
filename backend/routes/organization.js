const express = require("express");
const Organization = require("../models/Organization");

const router = express.Router();

console.log("ORGANIZATION ROUTES FILE LOADED");


router.get("/organizations/district/:district", async (req, res) => {

    try {

        const district = req.params.district;



        const organizations = await Organization.find({
            district: district
        });

        res.status(200).json(organizations);

    } catch (error) {

        console.log(error);

        res.status(500).json({
            message: "Server error"
        });
    }
});



router.get("/organizations/:district/:area", async (req, res) => {

    try {

        const district = req.params.district;
        const area = req.params.area;
        const organizations = await Organization.find({
            district: district,
            area: area
        });

        res.status(200).json(organizations);

    } catch (error) {

        console.log(error);

        res.status(500).json({
            message: "Server error"
        });
    }
});

module.exports = router;
