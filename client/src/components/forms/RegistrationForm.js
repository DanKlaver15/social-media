import React, { useState } from "react";
import { connect } from "react-redux";
import { registerRequest } from "../../state/User/thunks";
import { Redirect } from "react-router-dom";
import Logo from "../Logo";

const RegistrationForm = ({ register, registered }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  if (registered)
    return (
      <Redirect
        to={{
          pathname: "/",
          state: { from: "/registration" },
        }}
      />
    );

  return (
    <div className="flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="flex justify-center">
          <Logo size={12} />
        </div>
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Register
        </h2>
        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                register({ firstName, lastName, email, password });
              }}
              className="space-y-8 divide-y"
            >
              <div className="space-y-8">
                <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6 h-16">
                  <div className="sm:col-span-3">
                    <label
                      htmlFor="first_name"
                      className="block text-sm font-medium text-gray-700"
                    >
                      First name
                    </label>
                    <div className="mt-1">
                      <input
                        onChange={(e) => setFirstName(e.target.value)}
                        value={firstName}
                        type="text"
                        name="first_name"
                        id="first_name"
                        autoComplete="given-name"
                        className="shadow-sm pl-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-300 rounded-md bg-gray-100 h-9"
                        required
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-3">
                    <label
                      htmlFor="last_name"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Last name
                    </label>
                    <div className="mt-1">
                      <input
                        onChange={(e) => setLastName(e.target.value)}
                        value={lastName}
                        type="text"
                        name="last_name"
                        id="last_name"
                        autoComplete="family-name"
                        className="shadow-sm pl-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-300 rounded-md bg-gray-100 h-9"
                        required
                      />
                    </div>
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email address
                  </label>
                  <div className="mt-1">
                    <input
                      onChange={(e) => setEmail(e.target.value)}
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      className="appearance-none pl-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm bg-gray-100"
                      value={email}
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Password
                  </label>
                  <div className="mt-1">
                    <input
                      onChange={(e) => setPassword(e.target.value)}
                      id="password"
                      name="password"
                      type="password"
                      autoComplete="current-password"
                      required
                      className="appearance-none pl-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm bg-gray-100"
                      value={password}
                    />
                  </div>
                </div>
              </div>

              <div className="pt-5">
                <div className="flex justify-end">
                  <button
                    type="submit"
                    className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Register
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  register: (user) => dispatch(registerRequest(user)),
});

const mapStateToProps = (state) => ({
  registered: state.registered,
});

export default connect(mapStateToProps, mapDispatchToProps)(RegistrationForm);
