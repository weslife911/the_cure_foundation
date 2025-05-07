const { Schema, model } = require("mongoose");

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    fieldOfStudy: {
        type: String,
        required: true
    },
    countryCode: {
        type: String,
        required: true
    },
    phoneNumber:{
        type: String,
        required: true
    },
    role: {
        type: String,
    },
    amount: {
        type: Number,
        required: true
    },
    password: {
        type: String,
        minLength: 8,
        required: true
    }
}, { timestamps: true });

const User = model("User", userSchema);

module.exports = User;