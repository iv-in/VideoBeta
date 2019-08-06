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
<<<<<<< HEAD
router.get('/detail', (req, res, next) => {

  //const Id = document.getElementById("id").value
  //const Over = document.getElementById("over")
  //const Title = document.getElementById("title")

  axiosMovies.get(`/${Id}?api_key=${apiKey}&language=${apiLanguage}&page=${page}&region=${apiRegion}`)
    .then(response => {

      res.render('movies/movies-detail', { response: response.data.results })
    })
    .catch(error => {
      console.log(error)
    })
})




=======

router.get('/detail/:id', (req, res, next) => {
  // console.log('estoy dentro')
  // console.log(req.params.id)
  let movieId = req.params.id // este es el id que nos hemos traido como params desde el enlace de detalles del profile.hbs
  axiosMovies.get(`/${movieId}?api_key=${apiKey}&language=${apiLanguage}&page=${page}&region=${apiRegion}`)
  .then(response => { 
    // console.log("estoy en la promesa")
        res.render('movies/movies-detail', {response: response.data})
      })
      .catch(error => {
        console.log(error)
      })

})

>>>>>>> 657158edb2ea6ad27a7ddefa97d7db205be911b9

router.post('/create', (req, res, next)=>{

  const{title, overview,id,vote_average}=req.body

  Movie.create({title, overview,id,vote_average})
  .then(theMovie => res.redirect('/roles/miPerfil') )
})

router.get('/mis_favoritos', (req, res, next) => {
  Movie.find()
  .then((myMovies => res.render('movies/movies-list', {movies: myMovies})))
  .catch((err) => console.log(err))
})


module.exports = router
