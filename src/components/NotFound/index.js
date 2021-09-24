/**
 * Import
 */
import React from "react";
import Loading from "../Loading";
import Notfound from "../../styles/images/404.jpg";

// Styles et assets

import "./notfound.scss";
/**
 * Code
 */
const App = () => (
  <div
    className="not-found"
  >
    <h1 id="title">
      404 Page Not Found
      <img src={Notfound} alt="notfound" />
    </h1>
  </div>
);

/**
 * Export
 */
export default App;
