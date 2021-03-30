import React, { useState } from "react";
import { connect } from "react-redux";
import { searchPeopleRequest } from "../Search/thunks";
import { Link } from "react-router-dom";

const AppSearch = ({ searchPeople }) => {
  const [query, setQuery] = useState("");
  return (
    <div className="min-w-0 flex-1">
      <div className="max-w-2xl relative text-gray-400 focus-within:text-gray-500">
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
                  onChange={(e) => setQuery(e.target.value)}
                  value={query}
                  type="text"
                  className="border border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 block w-full rounded-none rounded-l-md pl-10 sm:text-sm"
                />
              </div>
              <Link
                to="/search"
                onClick={() => {
                  searchPeople(query);
                }}
                className="-ml-px relative inline-flex items-center space-x-2 px-4 py-2 border border-gray-300 text-sm font-medium rounded-r-md text-gray-700 bg-gray-50 hover:bg-gray-100 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
              >
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
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  searchPeople: (query) => dispatch(searchPeopleRequest(query)),
});

export default connect(null, mapDispatchToProps)(AppSearch);
