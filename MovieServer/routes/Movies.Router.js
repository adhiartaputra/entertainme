const express = require ('express');
const { getMovies, addMovies, updateMovie, deleteMovie } = require ('../controllers/Movies.Controller');
const router = express.Router()

router
.get('/', getMovies)
.post('/', addMovies)
.put('/:id', updateMovie)
.delete('/:id', deleteMovie)
module.exports = router;