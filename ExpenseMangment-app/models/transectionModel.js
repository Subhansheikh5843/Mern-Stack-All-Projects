const { timeStamp } = require("console");
const mongoose = require("mongoose");

const transectionSchema = new mongoose.Schema(
  {
    
    userid: {
      type: String,
      required: [true, "userid is Required"],
    },
    amount: {
      type: Number,
      required: [true, "Amount is Required"],
    },
    type: {
      type: String,
      required: [true, "type is Required"],
    },
    category: {
      type: String,
      required: [true, "category is Required"],
    },
    refrence: {
      type: String,
    },
    description: {
      type: String,
      required: [true, "description is Required"],
    },
    date: {
      type: Date,
      required: [true, "date is Required"],
    },
  },
  { timeStamp: true }
);

const transectionModel = mongoose.model("transections", transectionSchema);
module.exports = transectionModel;
