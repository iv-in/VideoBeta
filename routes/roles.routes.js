const express = require('express');
const router = express.Router();
const Movie = require('../models/movie-model')
const Post = require('../models/post.model')

// requiero axios
const axios = require('axios')

// establezco las variables para las llamadas a la API
const apiKey = process.env.API_KEY
const apiLanguage = 'en-US'
const page = '1'
const apiRegion = 'ES'

// utilizo axios con el método create por si hacemos varias llamadas a la API
const axiosMovies = axios.create({
    baseURL: "https://api.themoviedb.org/3/movie"
})



const checkRoles = (role) => (req, res, next) => req.user && req.user.role === role ? next() : res.render("index", { msg: `Necesitas ser un ${role} para acceder aquí` })

router.get('/miPerfil', checkRoles("GUEST"), (req, res, next) => {
    axiosMovies.get(`/upcoming?api_key=${apiKey}&language=${apiLanguage}&page=${page}&region=${apiRegion}`) // método de la API
        .then(response => {
            //   console.log(response.data.results)
            res.render('roles/profile', { response: response.data.results, user: req.user }) // pasamos user a la vista con un if para el display del botón
        })
        .catch(error => {
            console.log(error)
        })
});


// el admin va a tener solo vista a los posts para eliminar los salidos de tono


router.get('/admin', checkRoles('ADMIN'), (req, res, next) => {
    Post.find()
    .then(allThePosts => res.render('roles/admin', {allThePosts}))
    .catch((err) => console.log('error al pasar a la vista de admin', err))
})

// y con estos los elimina


router.post('/admin/delete/:id', (req, res, next) => {
    const postId = req.params.id
    // console.log('estoy en la ruta')
    // console.log(postId)
    Post.findByIdAndRemove(postId)
    .then(() => res.redirect('/roles/admin'))
    .catch(err => {
        console.log('error al eliminar un post y volver a la vista de admin', err)
    })    
})



module.exports = router;



