const { Router } = require("express");
const { addQuestions, getQuestions, getQuestion } = require("../controllers/QuestionController");

const router = Router();

router.post("/add-question", addQuestions);
router.get("/questions", getQuestions);
router.get("/question/:id", getQuestion);

module.exports = router;