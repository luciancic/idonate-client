import React, { Component } from 'react';
import Header from './Header';
import Donor from './Donor';
import Receiver from './Receiver';
import Manager from './Manager';
import './App.css';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Link to="/donor">Donate</Link>
          <Link to="/receiver">Receive</Link>
          <Link to="/manager">Manage</Link>
          <Route path="/donor" component={Donor} />
          <Route path="/receiver" component={Receiver} />
          <Route path="/manager" component={Manager} />
        </div>
      </Router>
    );
  }
}

export default App;
