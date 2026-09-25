const mongoose = require("mongoose");

const locationSchema = new mongoose.Schema({
    district: {
        type: String,
        required: true
    },

    areas: {
        type: [String],
        required: true
    }
});

module.exports = mongoose.model("Location", locationSchema);