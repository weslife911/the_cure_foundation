const User = require("../models/User");
const { genSalt, hash, compare } = require("bcryptjs");
const { sign } = require("jsonwebtoken");

require("dotenv").config();

const registerUser = async(req, res) => {
    try {

        const { name, email, fieldOfStudy, countryCode, phoneNumber, role, amount, password } = req.body;

        if(!name || !email || !fieldOfStudy || !countryCode || !phoneNumber || !password) return res.json({
            success: false,
            message: "All fields are required!"
        });

        if(password.length < 8) return res.json({
            success: false,
            message: "Password must be at least 8 characters!"
        });

        const user = await User.findOne({ email });
        
        if(user) return res.json({
            success: false,
            message: "User with the same email exists! Try again with different credentials."
        });

        const genHash = await genSalt(Number(process.env.SALT_ROUNDS));
        const hashedPassword = await hash(password, genHash);

        const newUser = await User({
            name,
            email,
            fieldOfStudy,
            countryCode,
            phoneNumber,
            role: role || "user",
            amount: amount || 0,
            password: hashedPassword
        });

        if(newUser) {
            await newUser.save();
            const token = await sign({ id: newUser._id }, process.env.JWT_SECRET_KEY, {
                "expiresIn": "1d"
            });
            await res.cookie("jwt", token, {
                maxAge: 24 * 60 * 60 * 1000,
                // httpOnly: true,
                sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'lax',
                secure: process.env.NODE_ENV !== "development",
            });

            return res.json({
                success: true,
                message: "Account created successfully!"
            });
        } else {
            return res.json({
                success: false,
                message: "User was not successfully created!"
            });
        }

    } catch(e) {
        return res.json({
            success: false,
            message: e.message
        });
    }
};

const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({
                success: false,
                message: "All fields are required!"
            });
        }

        const user = await User.findOne({ email });

        if (!user) {
            return res.status(404).json({
                success: false,
                message: "Account with given email does not exist!"
            });
        }

        const isPasswordValid = await compare(password, user.password);

        if (!isPasswordValid) {
            return res.status(401).json({
                success: false,
                message: "Invalid password!"
            });
        }

        const token = await sign({ id: user._id }, process.env.JWT_SECRET_KEY, {
            expiresIn: "1d"
        });

        res.cookie("jwt", token, {
            maxAge: 24 * 60 * 60 * 1000,
            // httpOnly: true,
            sameSite: "strict",
            secure: process.env.NODE_ENV === "production",
        });

        return res.json({
            success: true,
            message: "Logged in successfully!"
        });

    } catch (e) {
        console.error("Login error:", e);
        return res.status(500).json({
            success: false,
            message: "An error occurred during login"
        });
    }
};


const checkAuth = (req, res) => {
    res.json(req.user);
};

const logout = async(req, res) => {
    try {
        res.cookie("jwt", "", { maxAge: 0 });
        return res.json({
            success: true,
            message: "Logged out successfully"
        });
    } catch(e) {
        return res.json({
            success: false,
            message: e.message
        });
    }
};

const getUsers = async(req, res) => {
    try {
        
        const users = await User.find({});

        if(!users) return res.json({
            success: false,
            message: "There are no users available in the database!"
        });

        return res.json(users);

    } catch(e) {
        return res.json({
            success: false,
            message: e.message
        });
    }
};


const getUser = async(req, res) => {
    try {

        const { id } = req.params;

        const user = await User.findById(id);

        if(!user) return res.json({
            success: false,
            message: "User with given ID does not exist!"
        });

        return res.json(user);

    } catch(e) {
        return res.json({
            success: false,
            message: e.message
        });
    }
};

const updateProfile = async(req, res) => {
    try {

        const { userId, name, fieldOfStudy, countryCode, phoneNumber } = req.body;

        const user = await User.findById(userId);

        if( !userId || !name || !fieldOfStudy || !countryCode || !phoneNumber) return res.json({
            success: false,
            message: "All fields are required!"
        });

        if(!user) return res.json({
            success: false,
            message: "User with given ID does not exist!"
        });

        const updatedUser = await User.findByIdAndUpdate(userId, {
            $set: {
                name,
                fieldOfStudy,
                countryCode,
                phoneNumber
            }
        }, { new: true });

        if(!updatedUser) return res.json({
            success: false,
            message: "Profile was not updated successfully!"
        });

        return res.json({
            success: true,
            message: "Profile updated successfully!"
        });

    } catch(e) {
        return res.json({
            success: false,
            message: e.message
        });
    }
};


module.exports = {
    registerUser,
    checkAuth,
    loginUser,
    logout,
    getUsers,
    getUser,
    updateProfile
};