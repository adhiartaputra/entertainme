import React, { Component } from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

export default class Home extends Component {
  render() {
    return (
      <Query
        query={gql`
          {
            fetchData{
              TVSeries {
                _id
                title
                overview
                poster_path
                popularity
                status
              }
          }
            }
        `}>
        {
          ({ loading, error, data }) => {
            console.log(data)
          if ( loading ) return <p> Loading sebentar ... </p>;
          if ( error ) return <p> Error bang ... </p>;
          return data.fetchData.Movies.map(({title, overview, poster_path, popularity, tag, status}, index) => 
            <div key={ index }>
              <div>
                <h2>{ title }</h2>
              </div>
              <div>
                <img src={ poster_path } alt='detail' width="250" height="auto"/>
              </div>
              <div>
                <p style={{ padding:'50px', textAlign:'justify' }}>{ overview }</p>
              </div>
            </div>
          )}
        }
      </Query>
    )
  }
};
