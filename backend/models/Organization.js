const mongoose = require("mongoose");

const organizationSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    district: {
        type: String,
        required: true
    },

    area: {
        type: String,
        required: true
    },

    details: {
        type: String,
        required: true
    },

    contact: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model("Organization", organizationSchema);
