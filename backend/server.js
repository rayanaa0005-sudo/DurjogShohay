const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const authRoutes = require("./routes/auth");
const loginRoutes = require("./routes/loginRoutes");

const app = express();

app.use(express.json());

app.use("/api", loginRoutes);
app.use("/api", authRoutes);

app.get("/", (req, res) => {
    res.send("DurjogShohay Backend is Running!");
});

const PORT = 5001;

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log("MongoDB connected successfully!");

        app.listen(PORT, () => {
            console.log("Server is running on port " + PORT);
        });
    })
    .catch((error) => {
        console.log("MongoDB connection failed:");
        console.log(error.message);
    });