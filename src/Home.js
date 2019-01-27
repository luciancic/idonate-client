import React, {Component} from "react"
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./Home.css";

class Home extends Component {
  render() {
    return (
        <div id="home">
          <Link to="/donor"><button class="btn btn-outline-success">Donate</button></Link>
          <Link to="/receiver"><button class="btn btn-outline-primary">Receive</button></Link>
          <Link to="/manager"><button class="btn btn-outline-secondary">Manage</button></Link>
        </div>
    );
  }
}

export default Home;