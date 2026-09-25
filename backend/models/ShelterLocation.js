const mongoose = require("mongoose");

const shelterLocationSchema = new mongoose.Schema({
    city: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model("ShelterLocation", shelterLocationSchema);