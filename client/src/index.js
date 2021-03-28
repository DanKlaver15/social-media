import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { configureStore } from "./store";
import "./index.css";
import App from "./App";
import Registration from "./components/Registration";

ReactDOM.render(
  <Provider store={configureStore()}>
    <Router>
      <Switch>
        <Route path="/" exact component={App} />
        <Route path="/registration" component={Registration} />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById("root")
);
