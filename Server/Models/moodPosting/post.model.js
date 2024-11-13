const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    unique: true,
  },
  mood: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  likes: [{ type: mongoose.Schema.Types.ObjectId, reference: "User" }],
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    reference: "User",
  },
});
module.exports = mongoose.model("Post", PostSchema);
