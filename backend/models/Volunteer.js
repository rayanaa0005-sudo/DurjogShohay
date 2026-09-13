const mongoose = require("mongoose"); //Mongoose is used to communicate with MongoDB from Node.js

const volunteerSchema = new mongoose.Schema({ //A schema defines the structure of one volunteer's information.
    name: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true
    },

    phone: {
        type: String,
        required: true
    },

    familyPhone: {
        type: String,
        required: true
    },

    bloodGroup: {
        type: String,
        required: true
    },

    preferredLocation: {
        type: String,
        required: true
    },

    availability: {
        type: String,
        required: true
    },

    skills: {
        type: String,
        required: true
    },

    areaOfInterest: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model("Volunteer", volunteerSchema);  //This creates a Mongoose model named Volunteer. Other backend files can import it using "Volunteer"