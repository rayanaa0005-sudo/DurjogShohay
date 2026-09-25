const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const cookieParser = require("cookie-parser");
require("dotenv").config();
const authRoutes = require("./routes/auth");
const loginRoutes = require("./routes/loginRoutes");
const volunteerRoutes = require("./routes/volunteer");
const shelterRoutes = require("./routes/shelter");
const organizationRoutes= require("./routes/organization");
const rehabilitationRoutes = require("./routes/rehabilitation");
const donationRoutes = require("./routes/donation");
const locationRoutes = require("./routes/location");
const shelterLocationRoutes = require("./routes/shelterLocation");
const contactRoutes = require("./routes/contact");
const contactInfoRoutes = require("./routes/contactInfo");
const app = express();

app.use(cors({
    origin: "http://localhost:5174",
    credentials: true
}));

app.use(express.json());
app.use(cookieParser());

app.use("/api", loginRoutes);
app.use("/api", authRoutes);
app.use("/api", volunteerRoutes);
app.use("/api", shelterRoutes);
app.use("/api", organizationRoutes);
app.use("/api", locationRoutes);
app.use("/api", shelterLocationRoutes);
app.use("/api/rehabilitation", rehabilitationRoutes);
app.use("/api/donation", donationRoutes);
app.use("/api", contactRoutes);
app.use("/api", contactInfoRoutes);
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