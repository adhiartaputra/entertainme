const TVseries = require ('../models/TVseries.model');

const getTVseries = (req, res) => {
  TVseries.find()
  .then(tvseries => {
    res.status(200).send(tvseries)
    })
  .catch(err => {
    res.status(500).send(err)
  })
}

const addTVseries = (req,res) => {
  TVseries.create(req.body)
  .then(() => {
    res.status(201).json({
      message: "successfully add new Movie"
    })
  })
  .catch(err => {
    res.status(500).send(err)
  })
}

const updateTVSeries = (req,res) => {
  TVSeries.findOneAndUpdate({_id: req.params.id},{$set: req.body}, {new: true})
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

const deleteTVSeries = (req, res) => {
  TVSeries.deleteOne({_id: req.params.id})
  .then(() => {
    res.status(200).json({
      message: "delete data succeess"
    })
  })
  .catch(err => {
    res.status(500).send(err)
  })
}

module.exports = { getTVseries, addTVseries, updateTVSeries, deleteTVSeries }
