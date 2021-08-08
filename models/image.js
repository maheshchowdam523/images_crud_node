const mongoose = require("mongoose");
const schema = new mongoose.Schema({
  createdAt: {
    type: Date,
  },
  updatedAt: {
    type: Date,
  },
  description: {
    type: String,
  },
  contentType: {
    type: String,
  },
  image: {
    type: String,
  },
  imageUrl: {
    type: String,
  },
});

module.exports = mongoose.model("image", schema);
