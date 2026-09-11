const mongoose = require("mongoose");

const volunteerSchema = new mongoose.Schema({
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

module.exports = mongoose.model("Volunteer", volunteerSchema);