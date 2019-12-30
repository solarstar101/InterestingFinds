import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Security, SecureRoute, ImplicitCallback } from "@okta/okta-react";

import NavBar from "./components/layout/Navbar";
import Home from "./components/pages/Home";
import Staff from "./components/pages/Staff";
import Login from "./components/auth/Login";
import Pricing from "./components/pages/Pricing";
import News from "./components/pages/News";

import "./App.css";

function onAuthRequired({ history }) {
  history.push("./login");
}

export default class App extends Component {
  render() {
    return (
      <Router>
        <Security
          issuer="https://dev-928238.okta.com/oauth2/default"
          clientId="0oa28ek59bNPHO7Ct357"
          redirectUri={window.location.origin + "/implicit/callback"}
          onAuthRequired={onAuthRequired}
          pkce={true}
        >
          <div className="App">
            <NavBar />
            <Route path="/" exact={true} component={Home} />
            <Route path="/news" exact={true} component={News} />
            <Route path="/pricing" exact={true} component={Pricing} />
            <SecureRoute path="/staff" exact={true} component={Staff} />
            <Route
              path="/login"
              render={() => <Login baseUrl="https://dev-928238.okta.com" />}
            />
            <Route path="/implicit/callback" component={ImplicitCallback} />
          </div>
        </Security>
      </Router>
    );
  }
}
