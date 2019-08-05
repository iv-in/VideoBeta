const express = require('express');
const router  = express.Router();
require('dotenv').config();

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




/* GET home page */
router.get('/', (req, res, next) => {
  axiosMovies.get(`/upcoming?api_key=${apiKey}&language=${apiLanguage}&page=${page}&region=${apiRegion}`) // método de la API
  .then (response => res.render('index', {response: response.data.results, message: "Próximos estrenos:"}))
    .catch(error => console.log(`error al sacar la foto:`, error))
    

})




module.exports = router;
