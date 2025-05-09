require("dotenv").config();

const express = require("express");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const cors = require("cors");
const nodemailer = require('nodemailer');
const connectToDB = require("./database/db");

const authRoutes = require("./routes/AuthRoutes");
const questionRoutes = require("./routes/QuestionRoutes");
const subjectRoutes = require("./routes/SubjectRoutes");
const resultRoutes = require("./routes/ResultRoutes");
const imageRoutes = require("./routes/ImageRoutes");
const testimonyRoutes = require("./routes/TestimonyRoutes");

const app = express();

app.use(express.json());

const corsOptions = {
    origin: [
      'https://the-cure-foundation-1.onrender.com', // Your Render frontend
      'http://localhost:5173' // Vite default port
    ],
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true,
    optionsSuccessStatus: 200
};

app.use(cors(corsOptions));

app.use(cookieParser());
app.use(bodyParser.json())

app.use("/api/auth", authRoutes);
app.use("/api/question", questionRoutes);
app.use("/api/subject", subjectRoutes);
app.use("/api/result", resultRoutes);
app.use("/api/image", imageRoutes);
app.use("/api/testimony", testimonyRoutes);

const PORT = Number(process.env.PORT) || 8080;

connectToDB();

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})

// app.listen(PORT, "0.0.0.0", () => {
//   console.log(`Server is running on port ${PORT}`);
// })