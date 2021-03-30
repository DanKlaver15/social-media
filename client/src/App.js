import React, { useEffect } from "react";
import { connect } from "react-redux";
import { authorizeRequest, getFromLocalStorage } from "./User/thunks";
import SettingsForm from "./components/forms/SettingsForm";
import { Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import SearchResults from "./components/SearchResults";

const AuthenticatedApp = React.lazy(() =>
  import("./components/AuthenticatedApp")
);

const UnauthenticatedApp = React.lazy(() =>
  import("./components/UnauthenticatedApp")
);

function App({ isLoggedIn, authorize }) {
  const user = getFromLocalStorage();

  useEffect(() => {
    if (!isLoggedIn && user) {
      authorize(user._id, user.token);
    }
  }, [isLoggedIn, user, authorize]);

  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      {isLoggedIn ? (
        <AuthenticatedApp>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/settings" component={SettingsForm} />
            <Route path="/search" component={SearchResults} />
          </Switch>
        </AuthenticatedApp>
      ) : (
        <UnauthenticatedApp />
      )}
    </React.Suspense>
  );
}

const mapStateToProps = (state) => ({
  isLoggedIn: state.loggedIn,
});

const mapDispatchToProps = (dispatch) => ({
  authorize: (userId, token) => dispatch(authorizeRequest(userId, token)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
