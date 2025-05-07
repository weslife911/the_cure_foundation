const { Schema, model } = require("mongoose");

const resultSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    subjectId: {
        type: Schema.Types.ObjectId,
        ref: "Subject",
        required: true
    },
    score: {
        type: String,
        required: true
    }
});

const Result = model("Result", resultSchema);

module.exports = Result;