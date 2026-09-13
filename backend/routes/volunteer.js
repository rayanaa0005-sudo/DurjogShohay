const express = require("express"); //Express is used to create the backend server and API routes. This imports the Express library into this file.
//using Express here because this file contains a backend API route for volunteer registration.
const Volunteer = require("../models/Volunteer"); //The model tells Mongoose what a volunteer's data should look like.

const router = express.Router(); //Instead of putting every route inside server.js, we created a separate router for volunteer-related operations.This keeps the backend organized.
console.log("VOLUNTEER ROUTES FILE LOADED"); //If the message does not appear, the route file may not be imported properly in server.js.
router.post("/volunteers", async (req, res) => {  //req = It contains information sent from the frontend. res = It is used to send a result back to the frontend.

    try {

        const {
            name,
            email,
            phone,
            familyPhone,
            bloodGroup,
            preferredLocation,
            availability,
            skills,
            areaOfInterest
        } = req.body; //The frontend sends an object inside the request body

        const newVolunteer = new Volunteer({ //This creates a new document using the Volunteer Mongoose model
            name, 
            email,
            phone,
            familyPhone,
            bloodGroup,
            preferredLocation,
            availability,
            skills,
            areaOfInterest
        });

        await newVolunteer.save(); //This tells Mongoose to save the document into MongoDB. Wait until MongoDB finishes saving this volunteer.

        res.status(201).json({  //This sends a response back to the frontend after the data is saved successfully. 201 is Create status code.
            message: "Volunteer registration successful!"  
        });

    } catch (error) {

        console.log(error);

        res.status(500).json({
            message: "Server error"
        });
    }
});

module.exports = router; //This allows server.js to import the volunteer route. Without this line, the route cannot be used from another file.