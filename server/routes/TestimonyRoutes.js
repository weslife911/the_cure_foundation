const { Router } = require("express");
const { addTestimony, getTestimonies, getTestimony } = require("../controllers/TestimonyController");

const router = Router();

router.post("/add-testimony", addTestimony);
router.get("/testimonies", getTestimonies);
router.get("/testimony/:id", getTestimony);

module.exports = router;