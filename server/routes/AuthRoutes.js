const { Router } = require("express");
const { registerUser, checkAuth, loginUser, logout, getUser, getUsers, updateProfile } = require("../controllers/AuthController");
const protectedRoute = require("../middleware/AuthMiddleware");

const router = Router();

router.post("/signup", registerUser);
router.post("/login", loginUser);
router.post("/logout", logout);
router.get("/check", protectedRoute, checkAuth);
router.get("/users", getUsers);
router.get("/user/:id", getUser);
router.put("/update-profile", updateProfile);

module.exports = router;