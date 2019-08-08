const mongoose = require("mongoose")
const Schema = mongoose.Schema

const movieSchema = new Schema({
  title: String,
  overview: String,
  id: Number,
  poster_path: String,
  vote_average: Number,
  view: { type: String,
        enum: ['pendiente', 'ya la he visto'],
        default: 'pendiente'
  }
}, { timestamps: true });

const Movie = mongoose.model("Movie", movieSchema)

module.exports = Movie