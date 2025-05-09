const Image = require("../models/Image");

const addImage = async(req, res) => {
    try {

        const { image, field } = req.body;

        if(!image || !field) return res.json({
            success: false,
            message: "All fields are required!"
        });

        const newImage = await Image({
            image,
            field
        });

        if(newImage) {
            await newImage.save();

            return res.json({
                success: true,
                message: "Image added successfully!"
            });
        } else {
            return res.json({
                success: false,
                message: "Image not added successfully!"
            });
        }

    } catch(e) {
        return res.json({
            success: false,
            message: e.message
        });
    }
};

const getImages = async(req, res) => {
    try {

        const images = await Image.find({});

        if(!images) return res.json({
            success: false,
            message: "No images available!"
        });

        return res.status(200).json(images);

    } catch(e) {
        return res.json({
            success: false,
            message: e.message
        });
    }
};

const getImage = async(req, res) => {
    try {

        const { id } = req.params;

        const image = await Image.findById(id);

        if(!image) return res.json({
            success: false,
            message: "Image with given ID does not exist!"
        });

        return res.status(200).json(image);

    } catch(e) {
        return res.json({
            success: false,
            message: e.message
        });
    }
};

module.exports = {
    addImage,
    getImages,
    getImage
};