const mongoose = require("mongoose");
const Joi = require("joi");

const Application = mongoose.model(
  "Application",
  new mongoose.Schema({
    Firstname: {
      type: String,
      required: true
    },
    Lastname: {
      type: String,
      required: true
    },
    EmailID: {
      type: String,
      required: true
    },
    Password: {
      type: String,
      required: true
    },
    VerifyPassword: {
      type: String,
      required: false
    },
    SelectCategory: {
      type: String,
      required: true
    },
    // image: {
    //   type: String,
    //   required: true
    // },
    // Resume: {
    //   type: String,
    //   required: true
    // },
    Skills: {
      type: [Array],
      minlength: 2,
      maxlength: 20,
      required: true
    },
    Location: {
      type: String,
      required: true
    },
    about: {
      type: String,
      minlength: 5,
      maxlength: 100,
      required: true
    },
    ProjectType: {
      type: String,
      enum: ["Fixed", "Hourly", "Both"],
      required: true
    },
    HourlyRate: {
      type: Number,
      min: 1,
      max: 1000,
      required: true
    },
    WorkType: {
      type: String,
      enum: ["Part Time", "Full Time"],
      required: true
    }
  })
);

function ValidateApplication(form) {
  const schema = {
    Firstname: Joi.string().required(),
    Lastname: Joi.string().required(),
    EmailID: Joi.string()
      .email()
      .required(),
    Password: Joi.string().required(),
    VerifyPassword: Joi.string().required(),
    SelectCategory: Joi.string().required(),
    // image:Joi.string().required(),
    // resume:Joi.string().required(),
    Skills: Joi.string()
      .min(2)
      .max(20)
      .required(),
    Location: Joi.string().required(),
    about: Joi.string().required(),
    ProjectType: Joi.string().required(),
    HourlyRate: Joi.number().required(),
    WorkType: Joi.string().required()
  };
  return Joi.validate(form, schema);
}

exports.Application = Application;
exports.ValidateApplication = ValidateApplication;
