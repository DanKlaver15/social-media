import React, { useState } from "react";
import { connect } from "react-redux";
import { logoutRequest } from "../state/User/thunks";
import { Link } from "react-router-dom";
import Avatar from "./Avatar";

const UserMenu = ({ avatarSource, logout, userId }) => {
  const [userMenu, setUserMenu] = useState(false);

  const openClass = userMenu
    ? "transition ease-in duration-75 transform opacity-100 scale-100"
    : "transition ease-out duration-100 transform opacity-0 scale-95";

  return (
    <>
      <button
        onClick={() => setUserMenu(!userMenu)}
        type="button"
        className="bg-white rounded-full flex text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600"
        id="menu-1"
        aria-expanded="false"
        aria-haspopup="true"
      >
        <span className="sr-only">Open user menu</span>
        <Avatar source={avatarSource} size={8} />
      </button>
      <div
        className={`origin-top-right absolute z-30 right-0 mt-2 w-48 rounded-md shadow-lg bg-white dark:bg-gray-700 ring-1 ring-black ring-opacity-5 focus:outline-none ${openClass}`}
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="menu-1"
      >
        <div className="py-1" role="none">
          <Link
            to="/profile"
            className="block px-4 py-2 text-sm text-gray-700 w-full text-left hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600"
            role="menuitem"
          >
            Your Profile
          </Link>
          <Link
            to="/"
            onClick={() => {
              logout(userId);
              setUserMenu(false);
            }}
            className="block px-4 py-2 text-sm text-gray-700 w-full text-left hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600"
            role="menuitem"
          >
            Sign Out
          </Link>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  avatarSource: state.user ? state.user.avatar : null,
  userId: state.user ? state.user._id : null,
});

const mapDispatchToProps = (dispatch) => ({
  logout: (userId) => dispatch(logoutRequest(userId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);
