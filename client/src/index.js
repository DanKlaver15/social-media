import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { configureStore } from "./store";
import UserLoginForm from "./components/userLoginForm";
import "./index.css";
import App from "./App";

ReactDOM.render(
  <Provider store={configureStore()}>
    <Router>
      <Switch>
        <Route path="/" component={App}></Route>
        {/* <Route path="/login" component={UserLoginForm}></Route> */}
      </Switch>
    </Router>
  </Provider>,
  document.getElementById("root")
);
