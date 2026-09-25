const mongoose = require("mongoose");

const rehabilitationSchema = new mongoose.Schema({
    location: {
        type: String,
        required: true
    },

    help: {
        type: String,
        required: true
    },

    description: {
        type: String,
        required: true
    },

    contact: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model("Rehabilitation", rehabilitationSchema);