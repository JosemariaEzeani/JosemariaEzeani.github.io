import React, { Component } from 'react';
import { PengCutz } from "../components/PengCutz";
import { Router } from "../utils/Router";
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <PengCutz/>
        <Router/>
      </div>
    );
  }
}

export default App;