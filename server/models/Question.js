const { Schema, model } = require("mongoose");

const questionSchema = new Schema({
    fileName: {
        type: String,
    },
    fileGenre: {
        type: String,
        required: true
    },
    fileLink: {
        type: String,
        required: true
    }
});

const Question = model("Question", questionSchema);

module.exports = Question;