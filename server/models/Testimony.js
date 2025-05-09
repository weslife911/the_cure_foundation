const { Schema, model } = require("mongoose");

const testimonySchema = new Schema({
    image: {
        type: Schema.Types.ObjectId,
        ref: "Image",
        required: true
    },
    userName: {
        type: String,
        required: true
    },
    occupation: {
        type: String,
        required: true
    },
    testimony: {
        type: String,
        required: true
    },
});

const Testimony = model("Testimony", testimonySchema);

module.exports = Testimony;