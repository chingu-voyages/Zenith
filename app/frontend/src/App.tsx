import "./styles.scss";

import React, { Component } from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes";

export default class App extends Component {
  render() {
    return <RouterProvider router={router} />;
  }
}
