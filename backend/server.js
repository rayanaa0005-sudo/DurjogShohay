const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const cookieParser = require("cookie-parser");
require("dotenv").config();
const authRoutes = require("./routes/auth");
const loginRoutes = require("./routes/loginRoutes");
const volunteerRoutes = require("./routes/volunteer"); //******Tanha*************/
const shelterRoutes = require("./routes/shelter"); //******Tanha*************/
const organizationRoutes = require("./routes/organization");//******Tanha*************/



const app = express();
console.log("RUNNING SERVER FROM:", process.cwd());

app.use(cors({
    origin: "http://localhost:5174",
    credentials: true
}));

app.use(express.json());
app.use(cookieParser());




app.use("/api", loginRoutes);
app.use("/api", authRoutes);
app.use("/api", volunteerRoutes);//******Tanha*************/
app.use("/api", shelterRoutes); //******Tanha*************/
app.use("/api", organizationRoutes);//******Tanha*************/




app.get("/", (req, res) => {
    res.send("DurjogShohay Backend is Running!");
});

const PORT = 5001;

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log("MongoDB connected successfully!");
        console.log("Database:", mongoose.connection.db.databaseName);

        app.listen(PORT, () => {
            console.log("Server is running on port " + PORT);
        });
    })
    .catch((error) => {
        console.log("MongoDB connection failed:");
        console.log(error.message);
    });