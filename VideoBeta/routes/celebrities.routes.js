const express = require('express');
const router = express.Router();

require('dotenv').config();

// requiero axios
const axios = require('axios')

// establezco las variables para las llamadas a la API
const apiKey = process.env.API_KEY
const apiLanguage = 'en-US'
const page = '1'


const axiosCelebrity = axios.create({
  baseURL: "https://api.themoviedb.org/3/person"
})

router.get('/celebrities', (req, res, next) => {

  axiosCelebrity.get(`/popular?api_key=${apiKey}&language=${apiLanguage}&page=${page}`) // método de la API
    .then(response => res.render('celebrities/celebrities', { response: response.data.results, message: "Celebrities:", user: req.user }))
    .catch(error => {
      console.log(error)
    })
})


module.exports = router;