const express = require('express')
const router = express.Router()
const Movie = require('../models/movie-model')

// requiero axios
const axios = require('axios')

//establezco las variables para las llamadas a la API
const apiKey = 'a2acebdabfdb1f2e541a6ea9ab258096'
const apiLanguage = 'en-US'
const page = '1'
const apiRegion = 'ES'
// //
// // utilizo axios con el método create por si hacemos varias llamadas a la API
const axiosMovies = axios.create({
  baseURL: "https://api.themoviedb.org/3/movie"
})


// Detalles de la pelicula
router.get('/detail', (req, res, next) => {
  res.render('movies/movies-detail')

  // const Id = document.getElementById("id").value
  //const Over = document.getElementById("over")
  //const Title = document.getElementById("title")

  // axiosMovies.get(`/${Id}?api_key=${apiKey}&language=${apiLanguage}&page=${page}&region=${apiRegion}`)
  //   .then(response => {

  //     res.render('movies/movies-detail', { response: response.data.results })
  //   })
  //   .catch(error => {
  //     console.log(error)
  //   })
})


module.exports = router
