import React, { Component } from 'react';
import Home from './Home';
import Pages from "./Pages";
import './App.css';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route component={Pages} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
