const Question = require("../models/Question");


const addQuestions = async(req, res) => {
    try {

        const { fileName, fileGenre, fileLink, field } = req.body;

        if(!fileName || !fileGenre || !fileLink || !field) return res.json({
            success: false,
            message: "All fields required!"
        });

        const newQuestion = await Question(req.body);

        if(newQuestion) {
            await newQuestion.save();
            return res.json({
                success: true,
                message: "File added successfully!"
            });
        } else {
            return res.json({
                success: false,
                message: "File was not added successfully!"
            });
        }

    } catch(e) {
        return res.json({
            success: false,
            message: e.message
        });
    }
};

const getQuestions = async(req, res) => {
    try {

        const questions = Question.find({});

        if(!questions) return res.json({
            success: false,
            message: "There are no questions available in the database!"
        });

        return res.json(questions);

    } catch(e) {
        return res.json({
            success: false,
            message: e.message
        });
    }
};

const getQuestion = async(req, res) => {
    try {

        const { id } = req.params;

        const question = await Question.findById(id);

        if(!question) return res.json({
            success: false,
            message: "Question with given ID does not exist!"
        });

        return res.status(200).json(question);

    } catch(e) {
        return res.json({
            success: false,
            message: e.message
        });
    }
};

module.exports = {
    addQuestions,
    getQuestions,
    getQuestion
};