import React, { Component } from 'react';
import { BrowserRouter as Router} from "react-router-dom";
import {Movies} from './containers';

class App extends Component {
  render() {
    return (
      <Router>
        <Movies/>
      </Router>
    );
  }
}

export default App;
