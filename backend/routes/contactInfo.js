const express = require("express");
const ContactInfo = require("../models/ContactInfo");

const router = express.Router();

router.get("/contact-info", async (req, res) => {
    try {

        const contactInfo = await ContactInfo.findOne();

        res.status(200).json(contactInfo);

    } catch (error) {

        console.log(error);

        res.status(500).json({
            message: "Server error"
        });
    }
});

module.exports = router;