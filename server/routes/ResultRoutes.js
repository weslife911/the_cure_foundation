const { Router } = require("express");
const { addResult, getResults } = require("../controllers/ResultController");

const router = Router();

router.post("/add-result", addResult);
router.get("/get-results", getResults);

module.exports = router;