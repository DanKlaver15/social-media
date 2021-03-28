import React, { useEffect } from "react";
import { connect } from "react-redux";
import { authorizeRequest, getFromLocalStorage } from "./User/thunks";

const AuthenticatedApp = React.lazy(() => import("./components/Home"));
const UnauthenticatedApp = React.lazy(() => import("./components/Login"));

function App({ isLoggedIn, authorize }) {
  const user = getFromLocalStorage();

  useEffect(() => {
    if (!isLoggedIn && user) {
      authorize(user._id, user.token);
    }
  }, [isLoggedIn, user, authorize]);

  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      {isLoggedIn ? <AuthenticatedApp /> : <UnauthenticatedApp />}
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
