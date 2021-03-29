import React from "react";
import LoginForm from "./LoginForm";
import Navigation from "./Navigation";

const Login = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Navigation />
      <LoginForm />
    </div>
  );
};

export default Login;
