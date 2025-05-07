const { Router } = require("express");
const { registerUser, checkAuth, loginUser, logout } = require("../controllers/AuthController");
const protectedRoute = require("../middleware/AuthMiddleware");

const router = Router();

router.post("/signup", registerUser);
router.post("/login", loginUser);
router.post("/logout", logout);
router.get("/check", checkAuth);

module.exports = router;