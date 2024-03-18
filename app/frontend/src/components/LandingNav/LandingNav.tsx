import React, { Component } from "react";
import { Link } from "react-router-dom";
export default class LandingNav extends Component {
  render() {
    return (
      <nav className="bg-gray-800 p-48">
        <Link to="/signup">Sign Up</Link>
        <Link to="/login">Log In</Link>
      </nav>
    );
  }
}
