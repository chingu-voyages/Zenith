import React, { Component } from "react";
import LandingNav from "../../components/LandingNav/LandingNav";
export default class LogIn extends Component {
  render() {
    return (
      <>
        <LandingNav currentPage="login" />
        <div>LogIn</div>
      </>
    );
  }
}
