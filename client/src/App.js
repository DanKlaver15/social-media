import React, { useEffect } from "react";
import useAuth from "./Hooks/useLocalStorageState";
import { connect } from "react-redux";
import { authorizeUserRequest } from "./User/thunks";

const AuthenticatedApp = React.lazy(() => import("./components/Home"));
const UnauthenticatedApp = React.lazy(() => import("./components/Login"));

function App({ isAuthorized, authorizeUser, authorizedUser }) {
  const [user, saveUser] = useAuth("zestyauth");

  useEffect(() => {
    if (!isAuthorized && user) {
      authorizeUser(user._id, user.token);
    }

    if (isAuthorized) {
      saveUser(authorizedUser);
    }
  }, [user, isAuthorized, saveUser, authorizedUser, authorizeUser]);

  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      {isAuthorized ? <AuthenticatedApp /> : <UnauthenticatedApp />}
    </React.Suspense>
  );
}

const mapStateToProps = (state) => ({
  isAuthorized: state.isAuthorized,
  authorizedUser: state.user,
});

const mapDispatchToProps = (dispatch) => ({
  authorizeUser: (userId, token) =>
    dispatch(authorizeUserRequest(userId, token)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
