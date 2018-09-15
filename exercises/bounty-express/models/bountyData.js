const mongoose = require("mongoose");

const bountiesSchema = new mongoose.Schema({
  fName: String,
  fName: String,
  living: boolean,
  age: Number,
  bountyAmount: Number,
  type: String,
  id: String
});

console.table(bounties);

module.exports = mongoose.model("bounty", bountiesSchema);
