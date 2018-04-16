const express = require ('express');
const { getMovies, addMovies, updateMovies } = require ('../controllers/Movies.Controller');
const router = express.Router()

router
.get('/', getMovies)
.post('/', addMovies)
.put('/:id', updateMovies)
module.exports = router;