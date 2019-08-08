const express = require('express')
const router = express.Router()
const Movie = require('../models/movie-model')
// const Post = require('../models/post.model')

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

router.get('/detail/:id', (req, res, next) => {
  // console.log('estoy dentro')
  // console.log(req.params.id)
  let movieId = req.params.id // este es el id que nos hemos traido como params desde el enlace de detalles del profile.hbs
  axiosMovies.get(`/${movieId}?api_key=${apiKey}&language=${apiLanguage}&page=${page}&region=${apiRegion}`)
    .then(response => {
      // console.log("estoy en la promesa")
      res.render('movies/movies-detail', { response: response.data })
    })
    .catch(error => {
      console.log(error)
    })

})

router.post('/create', (req, res, next) => {

  const { title, overview, id, vote_average, poster_path } = req.body // no cogemos el valor de view para que salga el default de pendiente

  Movie.create({ title, overview, id, vote_average, poster_path })
    .then(() => res.redirect('/roles/miPerfil'))
})

router.get('/mis_favoritos', (req, res, next) => {
  Movie.find()
    .then((myMovies => res.render('movies/movies-list', { movies: myMovies, user: req.user })))
    .catch((err) => console.log(err))
})



// Eliminar Pelicula
router.get('/delete', (req, res, next) => {
  //console.log(req.query)
  Movie.findById(req.query.movieId)
    .then(theMovie => res.render('movies/movies-delete', { movies: theMovie }))
    .catch(err => console.log('Hubo un error:', err))
})
router.post('/delete', (req, res, next) => {
  const { title, overview, id, vote_average, poster_path } = req.body
  Movie.findByIdAndRemove(req.query.movieId, { $set: { title, overview, id, vote_average, poster_path } })
    .then(theMovie => {
      //console.log(theMovies)
      res.redirect('/movies/mis_favoritos')
    })
    .catch(err => console.log('Hubo un error:', err))
})
// postear comentarios



module.exports = router
