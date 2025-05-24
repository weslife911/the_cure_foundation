const { Router } = require("express");
const { addSubject, getSubjects, getSubject } = require("../controllers/SubjectController");

const router = Router();

router.post("/add-subject", addSubject);
router.get("/subjects", getSubjects);
router.get("/subject/:id", getSubject);

module.exports = router;