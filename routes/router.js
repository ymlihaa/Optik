import React, { Component } from "react";
import App from "../src/App";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
} from "react-router-dom";

export default function Routes() {
  return (
    <Router>
      <div>
        <h2>Accounts</h2>

        <ul>
          <li>
            <Link to="/exam/:count">Sonraki Sayfa</Link>
          </li>
        </ul>

        <Switch>
          <Route
            path="/exam/:id"
            render={(props) => <App start={useParams()} />}
          />
        </Switch>
      </div>
    </Router>
  );
}
