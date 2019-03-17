import React, { Component } from 'react';
import './App.css';
import Top from './Components/Top/index'
import Middle from './Components/Middle'

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <Top/>
        <Middle/>
      </div>
    );
  }
}

export default App;
