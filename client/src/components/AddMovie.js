import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';

const ADD_MOVIE = gql`
  mutation addMovie( $newMovie: inputMovie! ) {
      addMovie( movie: $newMovie ) {
      title
      overview
      poster_path
      rating
      status
      }
    }`

export default class FormAddMovie extends Component {
  constructor () {
    super ()
    this.state = {
      title: '',
      overview: '',
      poster_path: '',
      rating: 0,
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
      <div className="container py-5 px-5" style={{ backgroundColor:'gainsboro' }}>
        <input type="text" placeholder="title" name="title" onChange={ this.handleOnChange } /> <br /> <br />
        <input type="text" placeholder="overview" name="overview" onChange={ this.handleOnChange } /> <br /> <br />
        <input type="text" placeholder="img url" name="poster_path" onChange={ this.handleOnChange } /> <br /> <br />
        <input type="number" placeholder="rating" name="rating" onChange={ this.handleOnChange } /> <br /> <br />
        <input type="text" placeholder="status" name="status" onChange={ this.handleOnChange } /> <br /> <br />
        <Mutation mutation={ ADD_MOVIE } >
          {
            (addMovie, { data }) => (
              <button className="btn btn-primary" type="submit" onClick={ () => {
                addMovie({variables:
                  {
                    newMovie: {
                      title: this.state.title,
                      overview: this.state.overview,
                      poster_path: this.state.poster_path,
                      rating: this.state.rating,
                      status: this.state.status
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
