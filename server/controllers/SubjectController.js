const Subject = require("../models/Subject");


const addSubject = async(req, res) => {
    try {

        const { name } = req.body;

        if(!name) return res.json({
            success: false,
            message: "All fields are required!"
        });

        const newSubject = await Subject(req.body);

        if(newSubject) {
            await newSubject.save();
            return res.json({
                success: true,
                message: "Subject added successfully!"
            });
        } else {
            return res.json({
                success: false,
                message: "Subjects was added successfully!"
            });
        }

    } catch(e) {
        return res.json({
            success: false,
            message: e.message
        });
    }
};

const getSubjects = async (req, res) => {
    try {
        const subjects = await Subject.find({});

        if (!subjects || subjects.length === 0) {
            return res.status(404).json({
                success: false,
                message: "No subjects found",
                data: []
            });
        }

        return res.status(200).json(
            subjects
        );

    } catch (e) {
        console.error("Error fetching subjects:", e);
        return res.status(500).json({
            success: false,
            message: "Failed to retrieve subjects",
            error: process.env.NODE_ENV === 'development' ? e.message : undefined
        });
    }
};

const getSubject = async(req, res) => {
    try {

        const { id } = req.params;

        const subject = await Subject.findById(id);

        if(!subject) return res.json({
            success: false,
            message: "Subject with given ID was not found!"
        });

        res.status(200).json(subject);

    } catch(e) {
        return res.json({
            success: false,
            message: e.message
        });
    }
};

module.exports = {
    addSubject,
    getSubjects,
    getSubject
};