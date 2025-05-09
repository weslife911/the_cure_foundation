const Testimony = require("../models/Testimony");

const addTestimony = async(req, res) => {
    try {

        const { image, userName, occupation, testimony } = req.body;

        if(!image || !userName || !occupation || !testimony) return res.json({
            success: false,
            message: "All fields are required!"
        });

        const newTestimony = await Testimony({
            image,
            userName,
            occupation,
            testimony
        });

        if(newTestimony) {
            await newTestimony.save();

            return res.json({
                success: true,
                message: "Testimony added successfully!"
            });
        } else {
            return res.json({
                success: false,
                message: "Testimony not added successfully!"
            });
        }

    } catch(e) {
        return res.json({
            success: false,
            message: e.message
        });
    }
};

const getTestimonies = async(req, res) => {
    try {

        const testimonies = await Testimony.find({});

        if(!testimonies) return res.json({
            success: false,
            message: "No testimonies available!"
        });

        return res.status(200).json(testimonies);

    } catch(e) {
        return res.json({
            success: false,
            message: e.message
        });
    }
};

const getTestimony = async(req, res) => {
    try {

        const { id } = req.params;

        const testimony = await Testimony.findById(id);

        if(!testimony) return res.json({
            success: false,
            message: "Testimony with given ID does not exist!"
        });

        return res.status(200).json(testimony);

    } catch(e) {
        return res.json({
            success: false,
            message: e.message
        });
    }
};

module.exports = {
    addTestimony,
    getTestimonies,
    getTestimony
};