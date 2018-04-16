const express = require ('express');
const { getTVseries, addTVseries, updateTVSeries, deleteTVSeries } = require ('../controllers/TVseries.Controller');
const router = express.Router()

router
.get('/', getTVseries)
.post('/', addTVseries)
.put('/:id', updateTVSeries)
.delete('/:id', deleteTVSeries)

module.exports = router;