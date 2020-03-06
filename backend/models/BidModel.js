const mongoose = require("mongoose");
const Joi = require("joi");

const BidDetails = mongoose.model(
  "BiddingDetails",
  new mongoose.Schema({
    BidAmount: {
      type: Number,
      required: true
    },
    Duration: {
      type: Number,
      required: true
    },
    Describe: {
      type: String,
      required: true
    },
    MileStone: {
      type: String,
      required: true
    }
  })
);

function BidValidation(bid) {
  const schema = {
    BidAmount: Joi.number().required(),
    Duration: Joi.number().required(),
    Describe: Joi.string().required(),
    MileStone: Joi.string().required()
  };
  return Joi.validate(bid, schema);
}

exports.BidDetails = BidDetails;
exports.BidValidation = BidValidation;
