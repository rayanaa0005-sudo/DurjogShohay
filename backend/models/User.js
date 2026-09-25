const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true,
        unique: true
    },

    password: {
        type: String,
        required: true
    },

    phone: {
        type: String,
        default: ""
    },

    bloodGroup: {
        type: String,
        default: ""
    },

    district: {
        type: String,
        default: ""
    },

    role: {
    type: String,
    enum: ["user", "admin"],
    default: "user"
    }
});

module.exports = mongoose.model("User", userSchema);