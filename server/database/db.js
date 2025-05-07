require("dotenv").config();

const { connect } = require("mongoose");

const connectToDB = async() => {
    const connectionParams = {

    };

    return await connect(process.env.MONGODB_URI, connectionParams)
    .then(() => console.log("MongoDB connected successfully"))
    .catch((e) => console.log(e.message));
};


module.exports = connectToDB;