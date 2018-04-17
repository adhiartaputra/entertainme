import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';

const ADD_MOVIE = gql`
  mutation addMovie( $newMovie: inputMovie! ) {
    addMovie( movie: $newMovie ) {
    title
    overview
    }
  }`

export default class FormAddMovie extends Component {
  constructor () {
    super ()
    this.state = {
      title: '',
      overview: '',
      poster_path: '',
      popularity: 0,
      status: ''
    }
  }

  handleOnChange = (e) => {
    this.setState({
      [e.target.name]:e.target.value
    })
  }

  render() {
    return (
      <div className="container py-5 px-4" style={{ backgroundColor:'gainsboro' }}>
        <input type="text" placeholder="title" name="title" onChange={ this.handleOnChange } /> <br /> <br />
        <input type="text" placeholder="overview" name="overview" onChange={ this.handleOnChange } /> <br /> <br />
        <input type="text" placeholder="image url" name="poster_path" onChange={ this.handleOnChange } /> <br /> <br />
        <input type="number" placeholder="rating" name="popularity" onChange={ this.handleOnChange } /> <br /> <br />
        <input type="text" placeholder="status" name="status" onChange={ this.handleOnChange } /> <br /> <br />
        <Mutation mutation={ ADD_MOVIE } >
          {
            (addMovie, { data }) => (
              <button type="submit" className="btn btn-primary" onClick={ () => {
                addMovie({variables:
                  {
                    newMovie: {
                      title: this.state.title,
                      overview: this.state.overview,
                      popularity: this.state.popularity,
                      status: this.state.status,
                      poster_path: this.state.poster_path
                    }
                  }
                })
              }}>Add Movie</button>
            )
          }
        </Mutation>
      </div>
    )
  }
};
