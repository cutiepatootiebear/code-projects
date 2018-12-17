const mongoose = require("mongoose");

const bountiesSchema = new mongoose.Schema({
  fName: String,
  lName: String,
  living: Boolean,
  age: Number,
  bountyAmount: Number,
  type: String,
});

console.table(bountiesSchema);

module.exports = mongoose.model("bounty", bountiesSchema);
