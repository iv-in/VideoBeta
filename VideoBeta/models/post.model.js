const mongoose = require("mongoose")
const Schema = mongoose.Schema

const postSchema = new Schema({
  text: String,
  author: String,
  movieId: Number,
}, { timestamps: true });

const Post = mongoose.model("movies", postSchema)

module.exports = Post