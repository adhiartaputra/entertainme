import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Movie from './components/Movie'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Entertain Me</h1>
        </header>
        <Movie />
      </div>
    );
  }
}

export default App;
