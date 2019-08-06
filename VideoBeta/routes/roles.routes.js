const express = require('express');
const router = express.Router();
const Movie = require('../models/movie-model')

// requiero axios
const axios = require('axios')

// establezco las variables para las llamadas a la API
const apiKey = 'a2acebdabfdb1f2e541a6ea9ab258096'
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
<<<<<<< HEAD
            res.render('roles/profile', { response: response.data.results })
=======
            res.render('roles/profile', { response: response.data.results, user: req.user }) // pasamos user a la vista con un if para el display del botón
>>>>>>> 657158edb2ea6ad27a7ddefa97d7db205be911b9
        })
        .catch(error => {
            console.log(error)
        })
});
router.get('/admin', checkRoles("ADMIN"), (req, res, next) => res.render('roles/admin'));







module.exports = router;



