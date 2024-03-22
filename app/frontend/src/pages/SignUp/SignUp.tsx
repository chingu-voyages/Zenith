import React, { Component } from "react";
import LandingNav from "../../components/LandingNav/LandingNav";

export default class SignUp extends Component {
  render() {
    return (
      <>
        <LandingNav currentPage="signup" />
        <div>SignUp</div>
      </>
    );
  }
}
