const mongoose = require("mongoose");

// schema definition
const gameSchema = new mongoose.Schema({
  name: String,
  year: Number,
  description: String,
  picture: String
  //postDate: { type: Date, default: Date.now } // Timestamp
});

module.exports = mongoose.model("Game", gameSchema);
