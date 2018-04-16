const Movie = require ('../models/Movies.model');

const getMovies = (req, res) => {
  Movie.find()
  .exec()
  .then(movies => {
    res.status(200).send(movies)
  })
  .catch(err => {
    res.status(500).send(err)
  })
}

const addMovies = (req,res) => {
  Movie.create(req.body)
  .then(() => {
    res.status(201).json({
      message: "successfully add new Movie"
    })
  })
  .catch(err => {
    res.status(500).send(err)
  })
}

const updateMovie = (req,res) => {
  Movie.findOneAndUpdate({_id: req.params.id},{$set: req.body}, {new: true})
  .then((updated) => {
    console.log(updated)
    res.status(201).json({
      message: "update data success",
      updated
    })
  })
  .catch(err => {
    res.status(500).send(err)
  })
}

const deleteMovie = (req, res) => {
  Movie.deleteOne({_id: req.params.id})
  .then(() => {
    res.status(200).json({
      message: "delete data succeess"
    })
  })
  .catch(err => {
    res.status(500).send(err)
  })
}

module.exports = { getMovies, addMovies, updateMovie, deleteMovie }
