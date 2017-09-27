import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Welcome from './Welcome.js'
import Today from './Today.js'
import Counter from './Counter.js'

class App extends Component {
  render() {
    return (
      <div>
        <Welcome name="Jamie"/>
        <Today day="Wednesday"/>
        <Counter />
      </div>
    );
  }
}

export default App;
