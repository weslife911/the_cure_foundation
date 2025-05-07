const Result = require("../models/Result");


const addResult = async(req, res) => {
    try {

        const { userId, subjectId, score } = req.body;

        if(!userId || !subjectId || !score) return res.json({
            success: false,
            message: "All fields required!"
        });

        const newResult = await Result(req.body);

        if(newResult) {
            await newResult.save();
            return res.json({
                success: true,
                message: "Results added successfully!"
            });
        } else {
            return res.json({
                success: false,
                message: "Results were not added successfully!"
            });
        }

    } catch(e) {
        return res.json({
            success: false,
            message: e.message
        });
    }
};

const getResults = async(req, res) => {
    try {

        const results = await Result.find({});

        if(!results) return res.json({
            success: false,
            message: "Results are not available!"
        });

        return res.status(200).json(results);

    } catch(e) {
        return res.json({
            success: false,
            message: e.message
        });
    }
};

module.exports = {
    addResult,
    getResults
};