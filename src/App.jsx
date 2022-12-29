import React, { Component } from 'react';
import { Router } from '@reach/router';
import { ProductContextProvider } from './context/ProductContext';
import Home from './pages/Home';
import Manage from './pages/Manage';

class App extends Component {
  render() {
    return (
      <ProductContextProvider>
        <Router>
          <Home path="/" />
          <Manage path="manage" />
        </Router>
      </ProductContextProvider>
    );
  }
}

export default App;
