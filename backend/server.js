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
const { co2 } = require("@tgwf/co2");
const app = express();
const co2Emission = new co2({ model: "swd" });

app.use(cors({
    origin: "http://localhost:5174",
    credentials: true
}));

app.use(express.json());
app.use(cookieParser());




// Middleware to calculate data transfer size
app.use((req, res, next) => {
    let requestBytes = 0;
    let responseBytes = 0;

    // Calculate request size
    if (req.body) {
        requestBytes = Buffer.byteLength(
            JSON.stringify(req.body),
            "utf8"
        );
    }

    if (req.query) {
        requestBytes += Buffer.byteLength(
            JSON.stringify(req.query),
            "utf8"
        );
    }

    if (req.headers) {
        requestBytes += Buffer.byteLength(
            JSON.stringify(req.headers),
            "utf8"
        );
    }

    // Override res.write to calculate response size
    const originalWrite = res.write;
    const originalEnd = res.end;

    res.write = function (chunk) {
        if (chunk) {
            responseBytes += Buffer.byteLength(chunk, "utf8");
        }

        originalWrite.apply(res, arguments);
    };

    res.end = function (chunk) {
        if (chunk) {
            responseBytes += Buffer.byteLength(chunk, "utf8");
        }

        // Store total bytes
        res.locals.totalBytes = requestBytes + responseBytes;

        // Calculate carbon emissions
        const greenHost = false;

        const emissions = co2Emission.perByte(
            res.locals.totalBytes,
            greenHost
        );

        console.log(
            `Data transferred: ${res.locals.totalBytes} bytes`
        );

        console.log(
            `Estimated CO2 emissions: ${emissions.toFixed(7)} grams`
        );

        originalEnd.apply(res, arguments);
    };

    next();
});








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