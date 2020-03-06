const mongoose = require("mongoose");
const Joi = require("joi");

const PostaJob = mongoose.model(
  "PostaJob",
  new mongoose.Schema({
    selectCategory: {
      type: String,
      required: true
    },
    ProjectTitle: {
      type: String,
      required: true
    },
    ExplainInDetail: {
      type: String,
      required: true
    },
    Skills: {
      type: String,
      required: true
    },
    projectType: {
      type: String,
      enum: ["Fixed", "Hourly"],
      required: true
    },
    Budget: {
      type: Number,
      required: true
    },
    Duration: {
      type: Number,
      required: true
    }
  })
);

function ValidatePostJob(job) {
  const schema = {
    selectCategory: Joi.string().required(),
    ProjectTitle: Joi.string().required(),
    ExplainInDetail: Joi.string().required(),
    Skills: Joi.string().required(),
    projectType: Joi.string().required(),
    Budget: Joi.number().required(),
    Duration: Joi.number().required()
  };
  return Joi.validate(job, schema);
}

exports.PostaJob = PostaJob;
exports.ValidatePostJob = ValidatePostJob;
