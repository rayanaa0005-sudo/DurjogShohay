const mongoose = require("mongoose");

const donationSchema = new mongoose.Schema({
    donationNumber: {
        type: String,
        required: true,
        unique: true
    },

    donationType: {
        type: String,
        required: true
    },

    quantity: {
        type: String,
        required: true
    },

    location: {
        type: String,
        required: true
    },

    description: {
        type: String,
        required: true
    },
    userId: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: "User", 
        required: true 
    },

    status: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model("Donation", donationSchema);