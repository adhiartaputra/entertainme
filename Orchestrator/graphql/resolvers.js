const axios = require('axios')

const resolver = {
  Query : {
    fetchData: async () => {
      try {
        const movie = await axios.get('http://localhost:3001/movies')
        const tvseries = await axios.get('http://localhost:3002/tvseries')
        let data = {
          Movies: movie.data,
          TVSeries: tvseries.data
        }
        return data
      } catch (err) {
        return err
      }
    }
  },

  Mutation : {
    addMovie: async (_,{movie}) => {
      try {
        const newMovie = await axios.post('http://localhost:3001/movies', movie)
        return newMovie.data.newMovie
      } catch (err) {
        return err
      }
    },
    addTVSeries: async (_,args) => {
      try {
        const newTVSeries = await axios.post('http://localhost:3002/tvseries', args)
        return newTVSeries.data.data
      } catch (err) {
        return err
      }
    }
  }

}

module.exports = resolver