require("dotenv").config();

const transporter = require("../utils/transporter");

const sendEmail = async(req, res) => {
    try {

        const { email, message } = req.body;

        if(!email || !message) return res.json({
            success: false,
            message: "All fields are required!"
        });

        const mailOptions = {
            from: email,
            to: process.env.GMAIL_USER,
            text: message
        };

        await transporter.sendMail(mailOptions);
        res.status(200).json({
            success: true,
            message: 'Email sent successfully'
        });

    } catch(e) {
        return res.json({
            success: false,
            message: e.message
        });
    }
};

module.exports = {
    sendEmail
};