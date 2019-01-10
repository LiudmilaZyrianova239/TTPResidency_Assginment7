import React, { Component } from 'react';
import AppComponent from './components/AppComponent.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App" >
        <div className="App-header">Gifs</div>
        <AppComponent />
      </div>
    );
  }
}

export default App;
