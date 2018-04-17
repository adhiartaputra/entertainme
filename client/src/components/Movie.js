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
              Movies {
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
            <div key={ index } className="container py-5">
              <div className="row">
                <div className="col-sm-4">
                  <img src={ poster_path } alt='detail' width="160" height="auto"/>
                </div>
                <div className="col-sm-8" >
                  <h2 style={{ paddingBottom:10, textAlign:'left', fontFamily:'futura' }} >{ title }</h2>
                  <p style={{ textAlign:'justify' }}>{ overview }</p>
                  <div className="row">
                    <div className="col-sm-6">
                      <p style={{ textAlign:'justify' }}>Rating : { popularity }</p>
                    </div>
                    <div className="col-sm-6">
                      <p style={{ textAlign:'right' }}>Status : { status }</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        }
      </Query>
    )
  }
};
