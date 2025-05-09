const { Schema, model } = require("mongoose");

const imageSchema = new Schema({
    image: {
        type: String,
        required: true
    },
    field: {
        type: String,
        required: true
    }
});

const Image = model("Image", imageSchema);

module.exports = Image;