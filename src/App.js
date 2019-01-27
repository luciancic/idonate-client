import React, { Component } from 'react';
import './App.css';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Link to="/donor">Donate</Link>
          <Link to="/receiver">Receive</Link>
          <Link to="/manager">Manage</Link>
        </div>
      </Router>
    );
  }
}

export default App;
