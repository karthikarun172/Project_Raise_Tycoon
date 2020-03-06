const express = require("express");
const router = express.Router();
const { PostaJob, ValidatePostJob } = require("../models/PostaJobModel");

router.get("/:id", async (req, res) => {
  const Jobpost = await PostaJob.findById(req.params.id).select("-__v");
  if (!Jobpost)
    return res.status(404).send("The movie with the given ID was not found.");
  res.send(Jobpost);
});

router.get("/", async (req, res) => {
  const Jobpost = await PostaJob.find().sort("ProjectTitle");
  res.send(Jobpost);
});

router.post("/", async (req, res) => {
  const { error } = ValidatePostJob(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  let Jobpost = new PostaJob({
    selectCategory: req.body.selectCategory,
    ProjectTitle: req.body.ProjectTitle,
    ExplainInDetail: req.body.ExplainInDetail,
    Skills: req.body.Skills,
    projectType: req.body.projectType,
    Budget: req.body.Budget,
    Duration: req.body.Duration
  });

  Jobpost = await Jobpost.save();
  res.send(Jobpost);
});

module.exports = router;
