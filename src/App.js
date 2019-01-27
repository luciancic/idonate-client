import React, { Component } from 'react';
import Navigation from './Navigation';
import Pages from "./Pages";
import './App.css';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route path="/" exact component={Navigation} />
            <Route component={Pages} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
