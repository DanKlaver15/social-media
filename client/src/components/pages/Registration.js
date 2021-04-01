import React from "react";
import Navigation from "../Navigation";
import RegistrationForm from "../forms/RegistrationForm";

const Registration = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <RegistrationForm />
    </div>
  );
};

export default Registration;
