import React, { useState } from "react";
import { connect } from "react-redux";
import OnlineListItem from "./OnlineListItem";

const OnlineFriendsList = ({ users, isLoading }) => {
  return (
    <div className="absolute inset-y-0 right-0 pl-10 max-w-md flex sm:pl-16">
      <div className="w-screen max-w-md">
        <div className="h-full flex flex-col bg-white shadow-xl overflow-y-scroll">
          <div className="pl-6 pt-3 pb-3">
            <div className="flex items-start justify-between">
              <h2
                className="text-lg font-medium text-gray-900"
                id="slide-over-title"
              >
                Friends
              </h2>
            </div>
          </div>
          <div className="border-t border-gray-300 px-6 pb-4">
            <div>
              <div className="mt-1 flex rounded-md shadow-md pt-3">
                <div className="relative flex items-stretch flex-grow focus-within:z-10">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg
                      className="h-5 w-5 text-gray-400"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                    </svg>
                  </div>
                  <input
                    type="text"
                    className="border border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 block w-full rounded-none rounded-l-md pl-10 sm:text-sm"
                  />
                </div>
                <button className="-ml-px relative inline-flex items-center space-x-2 px-4 py-2 border border-gray-300 text-sm font-medium rounded-r-md text-gray-700 bg-gray-50 hover:bg-gray-100 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500">
                  <svg
                    className="h-5 w-5 text-gray-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div className="border-b border-gray-300">
            <div className="px-6">
              <nav className="-mb-px flex space-x-6">
                <button className="border-indigo-500 text-indigo-600 whitespace-nowrap pb-4 px-1 border-b-2 font-medium text-sm">
                  All
                </button>

                <button className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap pb-4 px-1 border-b-2 font-medium text-sm">
                  Online
                </button>

                <button className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap pb-4 px-1 border-b-2 font-medium text-sm">
                  Offline
                </button>
              </nav>
            </div>
          </div>
          <ul className="divide-y divide-gray-200 overflow-y-auto h-screen">
            <OnlineListItem />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default OnlineFriendsList;