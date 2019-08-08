const mongoose = require("mongoose")
const Schema = mongoose.Schema

const postSchema = new Schema({
  comment: String,
  author: String,
  movieId: Number,
}, { timestamps: true });

const Post = mongoose.model("post", postSchema)

module.exports = Post