const express = require("express");
const User = require("../models/User");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const checkToken = require("../middleware/checktoken");

const router = express.Router();

// SIGNUP
router.post("/signup", async (req, res) => {
    try {
        const {
            name,
            email,
            password,
            phone,
            bloodGroup,
            district
        } = req.body;

        const existingUser = await User.findOne({ email });

        if (existingUser) {
            return res.status(400).json({
                message: "Email already exists"
            });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new User({
            name,
            email,
            password: hashedPassword,
            phone,
            bloodGroup,
            district
        });

        await newUser.save();

        res.status(201).json({
            message: "Account created successfully!"
        });

    } catch (error) {
        console.log(error);

        res.status(500).json({
            message: "Server error"
        });
    }
});

// GET CURRENT USER
router.get("/profile", checkToken, async (req, res) => {
    try {
        const user = await User.findById(req.user.id).select("-password");

        if (!user) {
            return res.status(404).json({
                message: "User not found"
            });
        }

        res.status(200).json({
            user
        });

    } catch (error) {
        console.log(error);

        res.status(500).json({
            message: "Server error"
        });
    }
});

// LOGOUT
router.post("/logout", (req, res) => {
    res.clearCookie("token", {
        httpOnly: true,
        sameSite: "lax",
        secure: false
    });

    res.status(200).json({
        message: "Logout successful!"
    });
});

module.exports = router;