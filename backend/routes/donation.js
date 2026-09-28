const express = require("express");
const Donation = require("../models/Donation");
const checkToken = require("../middleware/checktoken");
const checkAdmin = require("../middleware/checkAdmin");
const router = express.Router();

router.post("/", checkToken, async (req, res) => {
    try {
        const {
            donationType,
            quantity,
            location,
            description
        } = req.body;

        if (!donationType || !quantity || !location || !description) {
            return res.status(400).json({
                message: "All fields are required"
            });
        }

        const donations = await Donation.find({}, { donationNumber: 1 });

        let highestNumber = 0;

        for (const donation of donations) {
            const number = parseInt(donation.donationNumber.replace("D-", ""));

            if (number > highestNumber) {
                highestNumber = number;
            }
        }

        const donationNumber =
            "D-" + String(highestNumber + 1).padStart(5, "0");

        const newDonation = new Donation({
            donationNumber: donationNumber,
            donationType: donationType,
            quantity: quantity,
            location: location,
            description: description,
            userId: req.user.id,
            status: "PENDING"
        });

        await newDonation.save();

        res.status(201).json({
            message: "Donation submitted successfully!",
            donation: newDonation
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Server error"
        });
    }
});

router.get("/my-donations", checkToken, async (req, res) => {
    try {
        const donations = await Donation.find({
            userId: req.user.id
        });

        res.status(200).json(donations);

    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Server error"
        });
    }
});

router.get("/admin/all", checkToken, checkAdmin, async (req, res) => {
    try {
        const donations = await Donation.find();

        res.status(200).json(donations);

    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Server error"
        });
    }
});

router.put("/admin/:donationNumber", checkToken, checkAdmin, async (req, res) => {
    try {
        const { status } = req.body;

        const allowedStatuses = [
            "PENDING",
            "APPROVED",
            "REJECTED",
            "COMPLETED"
        ];

        if (!allowedStatuses.includes(status)) {
            return res.status(400).json({
                message: "Invalid status"
            });
        }

        const donation = await Donation.findOne({
            donationNumber: req.params.donationNumber
        });

        if (!donation) {
            return res.status(404).json({
                message: "Donation not found"
            });
        }

        donation.status = status;

        await donation.save();

        res.status(200).json({
            message: "Donation status updated successfully!",
            donation: donation
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Server error"
        });
    }
});

router.get("/:donationNumber", async (req, res) => {
    try {
        const donation = await Donation.findOne({
            donationNumber: req.params.donationNumber
        });

        if (!donation) {
            return res.status(404).json({
                message: "Donation not found"
            });
        }

        res.status(200).json(donation);

    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Server error"
        });
    }
});

module.exports = router;