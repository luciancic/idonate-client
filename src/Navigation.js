import React, {Component} from "react"
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Navigation extends Component {
  render() {
    return (
      
        <div className="App">
          <Link to="/donor">Donate</Link>
          <Link to="/receiver">Receive</Link>
          <Link to="/manager">Manage</Link>
          
          
          
        </div>
      


    );
  }
}

export default Navigation;