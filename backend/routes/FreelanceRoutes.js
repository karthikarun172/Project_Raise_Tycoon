const express = require("express");
const router = express.Router();
const {
  ValidateApplication,
  Application
} = require("../models/FreelancerApplicationM");

router.get("/", async (req, res) => {
  const ApplicationForm = await Application.find().sort("name");
  res.send(ApplicationForm);
});
router.get("/:id", async (req, res) => {
  const ApplicationForm = await Application.findById(req.params.id).select(
    "-__v"
  );
  if (!ApplicationForm)
    return res.status(404).send("The movie with the given ID was not found.");
  res.send(ApplicationForm);
});
router.post("/", async (req, res) => {
  const { error } = ValidateApplication(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  let ApplicationForm = new Application({
    Firstname: req.body.Firstname,
    Lastname: req.body.Lastname,
    EmailID: req.body.EmailID,
    Password: req.body.Password,
    SelectCategory: req.body.SelectCategory,
    //image:req.file.path,
    //requme:req.file.path,
    Skills: req.body.Skills,
    Location: req.body.Location,
    about: req.body.about,
    ProjectType: req.body.ProjectType,
    HourlyRate: req.body.HourlyRate,
    WorkType: req.body.WorkType
  });
  ApplicationForm = await ApplicationForm.save();

  res.send(ApplicationForm);
});

module.exports = router;
