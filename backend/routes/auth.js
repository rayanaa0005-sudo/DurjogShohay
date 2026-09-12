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

// current logged in user check kore
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
//edit 
router.put("/profile", checkToken, async (req, res) => {
    try {
        const {
            phone,
            bloodGroup,
            district
        } = req.body;

        const user = await User.findById(req.user.id);

        if (!user) {
            return res.status(404).json({
                message: "User not found"
            });
        }

        user.phone = phone;
        user.bloodGroup = bloodGroup;
        user.district = district;

        await user.save();

        res.status(200).json({
            message: "Profile updated successfully!",
            user: {
                name: user.name,
                email: user.email,
                phone: user.phone,
                bloodGroup: user.bloodGroup,
                district: user.district
            }
        });

    } catch (error) {
        console.log(error);

        res.status(500).json({
            message: "Server error"
        });
    }
});

// logout
router.post("/logout", (req, res) => {
    //token cookie theke clear kore dey
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