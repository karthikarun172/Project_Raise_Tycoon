const express = require("express");
const router = express.Router();
const { BidDetails, BidValidation } = require("../models/BidModel");

router.post("/", async (req, res) => {
  const { error } = BidValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  let BidData = new BidDetails({
    BidAmount: req.body.BidAmount,
    Duration: req.body.Duration,
    Describe: req.body.Describe,
    MileStone: req.body.MileStone
  });
  BidData = await BidData.save();
  res.send(BidData);
});

module.exports = router;
