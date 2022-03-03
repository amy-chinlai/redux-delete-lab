import React, { Component } from 'react';
import BandsContainer from './containers/BandsContainer';
import Bands from "./components/Bands"

class App extends Component {
  render() {
    return (
      <div className="App">
        <BandsContainer />
      </div>
    );
  }
};

export default App;
