require("dotenv").config();

const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const connectToDB = require("./database/db");

const authRoutes = require("./routes/AuthRoutes");
const questionRoutes = require("./routes/QuestionRoutes");
const subjectRoutes = require("./routes/SubjectRoutes");
const resultRoutes = require("./routes/ResultRoutes");

const app = express();

app.use(express.json());
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}));
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/question", questionRoutes);
app.use("/api/subject", subjectRoutes);
app.use("/api/result", resultRoutes);

const PORT = Number(process.env.PORT) || 8080;

connectToDB();

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})