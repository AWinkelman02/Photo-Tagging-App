const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const LeaderboardSchema = new Schema({
  name: { type: String, required: true },
  time: { type: String, required: true },
  game: { type: String, required: true },
});

// Export model
module.exports = mongoose.model("Leaderboard", LeaderboardSchema);
