/**
 * Import
 */
import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
/**
 * Local import
 */
// Composants

// Containers
import Signin from "../../containers/Signin";
import Login from "../../containers/Login";
import LeafletMap from "../../containers/LeafletMap";
import Suggestions from "../../containers/Suggestions";

// Dumb
import Welcome from "../Welcome";
import NotFound from "../NotFound";
import Loading from "../Loading";
import About from "../About";

// Styles et assets

import "./app.scss";
/**
 * Code
 */
const App = () => (
  <Switch>
    <Route exact path="/" render={() => <Redirect to="/login" />} />

    <Route exact path="/about" render={() => <About />} />

    <Route
      exact
      path="/signin"
      render={() => (
        <Welcome>
          <Signin />
        </Welcome>
      )}
    />

    <Route
      exact
      path="/login"
      render={() => (
        <Welcome>
          <Login />
        </Welcome>
      )}
    />

    <Route
      // ROUTE LOADING A ENLEVER PAR LA SUITE
      exact
      path="/loading"
      render={() => <Loading />}
    />

    <Route exact path="/map" render={() => <LeafletMap />} />

    <Route exact path="/list" render={() => <Suggestions />} />

    <Route component={NotFound} />
  </Switch>
  // <LeafletMap />
);

/**
 * Export
 */
export default App;
