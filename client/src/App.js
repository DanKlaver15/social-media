import React from "react";
import useLocalStorageState from "./Hooks/useLocalStorageState";

const AuthenticatedApp = React.lazy(() => import("./components/Home"));
const UnauthenticatedApp = React.lazy(() => import("./components/Login"));

function App() {
  const [user, authorize] = useLocalStorageState("zestyauth");
  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      {user ? (
        <AuthenticatedApp />
      ) : (
        <UnauthenticatedApp user={user} authorize={authorize} />
      )}
    </React.Suspense>
  );
}

export default App;
