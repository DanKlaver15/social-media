import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { configureStore } from "./store";
import LoginForm from "./components/LoginForm";
import "./index.css";
import App from "./App";

ReactDOM.render(
  <Provider store={configureStore()}>
    <Router>
      <Switch>
        <Route path="/" exact component={App} />
        <Route path="/login" component={LoginForm} />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById("root")
);
