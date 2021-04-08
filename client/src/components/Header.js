import React from "react";
import AppSearch from "./AppSearch";
import UserMenu from "./menus/UserMenu";

const Header = () => {
  return (
    <header className="w-full ">
      <div className="relative z-10 flex-shrink-0 h-16 bg-white border-b border-gray-200 dark:border-gray-500 shadow-sm flex dark:bg-gray-800">
        <button
          type="button"
          className="border-r border-gray-200 px-4 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 md:hidden"
        >
          <span className="sr-only">Open sidebar</span>
          <svg
            className="h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h7"
            />
          </svg>
        </button>
        <div className="flex-1 flex justify-between px-4 sm:px-6">
          <div className="flex-1 flex">
            <AppSearch />
          </div>
          <div className="ml-2 flex items-center space-x-4 sm:ml-6 sm:space-x-6">
            <UserMenu />
            {/* <!-- Profile dropdown --> */}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
