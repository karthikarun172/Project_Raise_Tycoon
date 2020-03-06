const express = require("express");
const router = express.Router();
const { ImageData, ValidateImage } = require("../models/trainModel");
const multer = require("multer");

const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, "./uploads/");
  },
  filename: function(req, file, cb) {
    cb(null, new Date().toISOString() + file.originalname);
  }
});

const filefilter = (req, file, cb) => {
  if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

const upload = multer({
  storage: storage,
  limits: {
    fieldSize: 1024 * 1024 * 5
  },
  fileFilter: filefilter
});

router.post("/", upload.single("productImage"), async (req, res) => {
  const { error } = ValidateImage(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  let Images = new ImageData({
    image: req.file.path
  });

  Images = await Images.save();
  res.send(Image);
});

module.exports = router;
