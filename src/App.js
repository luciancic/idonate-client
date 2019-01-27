import React, { Component } from 'react';
import Donor from './Donor';
import Receiver from './Receiver';
import Manager from './Manager';
import Navigation from './Navigation';
import './App.css';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          
          <Route path="/donor" component={Donor} />
          <Route path="/receiver" component={Receiver} />
          <Route path="/manager" component={Manager} />
          
          <Route path="/" exact component={Navigation} />
        </div>
      </Router>
    );
  }
}

export default App;
