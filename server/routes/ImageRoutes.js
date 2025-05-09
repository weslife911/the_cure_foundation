const { Router } = require("express");
const { addImage, getImages, getImage } = require("../controllers/ImageController");

const router = Router();

router.post("/add-image", addImage);
router.get("/images", getImages);
router.get("/image/:id", getImage);

module.exports = router;