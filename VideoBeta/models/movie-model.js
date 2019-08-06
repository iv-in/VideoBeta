const mongoose = require("mongoose")
const Schema = mongoose.Schema

const movieSchema = new Schema({
  title: String,
  overview: String,
  id: Number,
  vote_average: Number
}, { timestamps: true });

const Movie = mongoose.model("movies", movieSchema)

module.exports = Movie