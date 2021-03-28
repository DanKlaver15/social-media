import React, { useState } from "react";

const OnlineListItem = ({ friend }) => {
  const [menu, setMenu] = useState(false);

  const openClass = menu
    ? "transition ease-in duration-75 transform opacity-100 scale-100"
    : "transition ease-out duration-100 transform opacity-0 scale-95";

  return (
    <li className="px-6 py-5 relative">
      <div className="group flex justify-between items-center">
        <button className="-m-1 p-1 block">
          <div
            className="absolute inset-0 group-hover:bg-gray-50"
            aria-hidden="true"
          ></div>
          <div className="flex-1 flex items-center min-w-0 relative">
            <span className="flex-shrink-0 inline-block relative">
              <img
                className="h-10 w-10 rounded-full"
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixqx=sZQjNUjFo7&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
              />
              <span
                className="bg-green-400 absolute top-0 right-0 block h-2.5 w-2.5 rounded-full ring-2 ring-white"
                aria-hidden="true"
              ></span>
            </span>
            <div className="ml-4 truncate">
              <p className="text-sm font-medium text-gray-900 truncate text-left">
                {friend.firstName + " "}
                {friend.lastName}
              </p>
              <p className="text-sm text-gray-500 truncate">{friend.email}</p>
            </div>
          </div>
        </button>
        <div className="ml-2 relative inline-block text-left">
          <button
            type="button"
            className="group relative w-8 h-8 bg-white rounded-full inline-flex items-center justify-center focus:outline-none"
            id="options-menu-0"
            aria-expanded="false"
            aria-haspopup="true"
            onClick={() => setMenu(!menu)}
          >
            <span className="sr-only">Open options menu</span>
            <span className="flex items-center justify-center h-full w-full rounded-full">
              <svg
                className="w-5 h-5 text-gray-400 group-hover:text-gray-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
              </svg>
            </span>
          </button>
          <div
            className={`origin-top-right absolute z-10 top-0 right-9 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none ${openClass}`}
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu-0"
          >
            <div className="py-1" role="none">
              <button
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                role="menuitem"
              >
                View profile
              </button>
              <button
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                role="menuitem"
              >
                Send message
              </button>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};

export default OnlineListItem;
