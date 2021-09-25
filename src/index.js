/**
 * NPM import
 */
import "@babel/polyfill";
import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";

/**
 * Local import
 */
import App from "./components/App/App";
import "./styles/index.sass";
// store
import store from "./store/index";

/**
 * Code
 */
const rootComponent = (
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
);

render(rootComponent, document.getElementById("root"));
