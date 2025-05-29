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
            from: `"Sender Name" <${email}>`,
            to: process.env.GMAIL_USER,
            html: `
                <p><strong>From:</strong> (${email})</p>
                <p><strong>Message:</strong></p>
                <p>${message}</p>
            `
        };

        await transporter.sendMail(mailOptions);
        return res.json({
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