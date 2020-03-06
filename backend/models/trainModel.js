const mongoose = require("mongoose");
const Joi = require("joi");

const ImageData = mongoose.model(
  "imageData",
  new mongoose.Schema({
    image: {
      type: String,
      required: true
    }
  })
);

function ValidateImage(validate) {
  schema = {
    image: Joi.any().required()
  };
  return Joi.validate(validate, schema);
}

exports.ImageData = ImageData;
exports.ValidateImage = ValidateImage;
