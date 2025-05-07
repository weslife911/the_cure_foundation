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
const allowedOrigins = [
    'https://the-cure-foundation.vercel.app',
    'https://the-cure-foundation.vercel.app/',
    'http://localhost:5173'
  ];
  
  app.use(cors({
    origin: function (origin, callback) {
      if (!origin) return callback(null, true);
      
      if (allowedOrigins.indexOf(origin) === -1) {
        const msg = 'The CORS policy for this site does not allow access from the specified Origin.';
        return callback(new Error(msg), false);
      }
      return callback(null, true);
    },
    credentials: true,
    exposedHeaders: ['Authorization']
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