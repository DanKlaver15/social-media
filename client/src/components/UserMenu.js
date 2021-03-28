import React from "react";
import { connect } from "react-redux";
import { logoutRequest } from "../User/thunks";

const UserMenu = ({ isOpen, close, logout }) => {
  const openClass = isOpen
    ? "transition ease-in duration-75 transform opacity-100 scale-100"
    : "transition ease-out duration-100 transform opacity-0 scale-95";

  return (
    <div
      className={`origin-top-right absolute z-30 right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none ${openClass}`}
      role="menu"
      aria-orientation="vertical"
      aria-labelledby="menu-1"
    >
      <div className="py-1" role="none">
        <button
          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
          role="menuitem"
        >
          Your Profile
        </button>
        <button
          onClick={() => {
            logout();
            close();
          }}
          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
          role="menuitem"
        >
          Sign Out
        </button>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logoutRequest()),
});

export default connect(null, mapDispatchToProps)(UserMenu);
