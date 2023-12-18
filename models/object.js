const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ObjectSchema = new Schema({
  object: { type: String, required: true },
  x: { type: Number, required: true },
  y: { type: Number, required: true },
  found: { type: Boolean, required: true },
  game: { type: String, required: true },
});

// Export model
module.exports = mongoose.model("Object", ObjectSchema);
