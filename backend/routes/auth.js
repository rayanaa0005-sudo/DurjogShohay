const express = require("express");
const User = require("../models/User");
const mongoose = require("mongoose");
const router = express.Router();
const bcrypt = require("bcrypt");



console.log("AUTH ROUTES FILE LOADED");

router.post("/signup", async (req, res) => {

    console.log("SIGNUP DATABASE:", mongoose.connection.db.databaseName);

    try {

        const { name, email, password } = req.body;

        const existingUser = await User.findOne({ email });

        if (existingUser) {
            return res.status(400).json({
                message: "Email already exists"
            });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        console.log("ORIGINAL PASSWORD:", password);
        console.log("HASHED PASSWORD:", hashedPassword);
        const newUser = new User({
            name,
            email,
            password: hashedPassword
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

module.exports = router;