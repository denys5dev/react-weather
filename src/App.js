import React, { Component } from 'react';

import SearchBar from './containers/SearchBar';
import WeatherLIst from './containers/WeatherList';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        <SearchBar />
        <WeatherLIst />
      </div>
    );
  }
}

export default App;
