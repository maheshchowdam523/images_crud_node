const router = require("express").Router();
const updload = require("../utils/multer");
const { uploadImages, getImages } = require("../services/imageService");

router.post("/", updload.array("image", 20), async (req, res, next) => {
  try {
    const data = await uploadImages(req?.files, req.body);
    return res.status(201).json(data);
  } catch (e) {
    console.log("exception", e.message);
    next(e);
  }
});

router.get("/", async (req, res, next) => {
  try {
    return res.status(200).json(getImages);
  } catch (err) {
    console.log(err);
    next({ status: 400, message: "Failed to fetch users" });
  }
});

module.exports = router;
