import React, { Component } from 'react';
import { Router } from '@reach/router';
import Home from './pages/Home';
import Manage from './pages/Manage';

class App extends Component {
  render() {
    return (
      <Router>
        <Home path="/" />
        <Manage path="manage" />
      </Router>
    );
  }
}

export default App;
