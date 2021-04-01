import React from "react";
import { Switch, Route } from "react-router-dom";
import Login from "./pages/Login";
import Registration from "./pages/Registration";

const UnauthenticatedApp = () => {
  return (
    <Switch>
      <Route path="/" exact component={Login} />
      <Route path="/register" component={Registration} />
    </Switch>
  );
};

export default UnauthenticatedApp;
