const { Router } = require("express");
const { sendEmail } = require("../controllers/EmailController");

const router = Router();

router.post("/send-email", sendEmail);

module.exports = router;