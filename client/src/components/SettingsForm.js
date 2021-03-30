import React, { useState } from "react";
import { connect } from "react-redux";
import FileUpload from "./Form/FileUpload";
import { updateUserRequest } from "../User/thunks";
import Avatar from "./Avatar";

const SettingsForm = ({ user, updateUser }) => {
  const [selectedFile, setSelectedfile] = useState(null);
  const [username, setUsername] = useState(user.username);
  const [bio, setBio] = useState(user.bio);
  const [darkMode, setMode] = useState(user.darkMode);
  const [firstName, setFirstName] = useState(user.firstName);
  const [lastName, setLastName] = useState(user.lastName);
  const [email, setEmail] = useState(user.email);

  const toggleClass = darkMode ? "bg-indigo-600" : "bg-gray-200";
  const toggleButtonClass = darkMode ? "translate-x-5" : "translate-x-0";
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        updateUser({
          ...user,
          username,
          bio,
          darkMode,
          firstName,
          lastName,
          email,
        });
      }}
      className="space-y-8 divide-y divide-gray-200"
    >
      <div className="space-y-8 divide-y divide-gray-200">
        <div>
          <div>
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              Profile
            </h3>
            <p className="mt-1 text-sm text-gray-500">
              This information will be displayed publicly so be careful what you
              share.
            </p>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
            <div className="sm:col-span-4">
              <label
                htmlFor="username"
                className="block text-sm font-medium text-gray-700"
              >
                Username
              </label>
              <div className="mt-1 flex rounded-md shadow-sm">
                <input
                  onChange={(e) => setUsername(e.target.value)}
                  value={username}
                  type="text"
                  name="username"
                  id="username"
                  autoComplete="username"
                  className="flex-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full min-w-0 rounded-none rounded-md sm:text-sm border-gray-300"
                />
              </div>
            </div>

            <div className="sm:col-span-6">
              <label
                htmlFor="about"
                className="block text-sm font-medium text-gray-700"
              >
                About
              </label>
              <div className="mt-1">
                <textarea
                  onChange={(e) => setBio(e.target.value)}
                  value={bio}
                  id="about"
                  name="about"
                  rows="3"
                  className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                ></textarea>
              </div>
              <p className="mt-2 text-sm text-gray-500">
                Write a few sentences about yourself.
              </p>
            </div>

            <div className="sm:col-span-6">
              <label
                htmlFor="photo"
                className="block text-sm font-medium text-gray-700"
              >
                Avatar
              </label>
              <div className="mt-1 flex items-center">
                {selectedFile ? (
                  <div>{selectedFile.name}</div>
                ) : (
                  <Avatar source={user.avatar} width={12} height={12} />
                )}

                <FileUpload onFileSelect={setSelectedfile} />
                {selectedFile && (
                  <button
                    onClick={() => setSelectedfile(null)}
                    type="button"
                    className="block ml-5 bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Clear
                  </button>
                )}
              </div>
            </div>
            <div className="sm:col-span-4">
              <div className="flex items-center justify-between">
                <span
                  className="flex-grow flex flex-col"
                  id="availability-label"
                >
                  <span className="text-sm font-medium text-gray-900">
                    Dark Mode
                  </span>
                  <span className="text-sm text-gray-500">
                    Nulla amet tempus sit accumsan. Aliquet turpis sed sit
                    lacinia.
                  </span>
                </span>

                <button
                  onClick={() => setMode(!darkMode)}
                  type="button"
                  className={`bg-gray-200 relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${toggleClass}`}
                  aria-pressed="false"
                  aria-labelledby="availability-label"
                >
                  <span className="sr-only">Use setting</span>

                  <span
                    aria-hidden="true"
                    className={`translate-x-0 pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200 ${toggleButtonClass}`}
                  ></span>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8">
          <div>
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              Personal Information
            </h3>
            <p className="mt-1 text-sm text-gray-500">
              Use a permanent address where you can receive mail.
            </p>
          </div>
          <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
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
                  className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
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
                  className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                />
              </div>
            </div>

            <div className="sm:col-span-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email address
              </label>
              <div className="mt-1">
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-5">
        <div className="flex justify-end">
          <button
            type="submit"
            className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Save
          </button>
        </div>
      </div>
    </form>
  );
};

const mapStateToProps = (state) => ({
  user: state.user,
});

const mapDispatchToProps = (dispatch) => ({
  updateUser: (user) => dispatch(updateUserRequest(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SettingsForm);
