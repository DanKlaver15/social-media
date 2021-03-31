import React from "react";
import { Link } from "react-router-dom";
import Avatar from "./Avatar";

const PeopleListItem = ({ id, name, email, avatar }) => (
  <li className="col-span-1 bg-white rounded-lg shadow divide-y divide-gray-200">
    <div className="w-full flex items-center justify-between p-6 space-x-6">
      <div className="flex-1 truncate">
        <div className="flex items-center space-x-3">
          <h3 className="text-gray-900 text-sm font-medium truncate">{name}</h3>
        </div>
        <p className="mt-1 text-gray-500 text-sm truncate">{email}</p>
      </div>
      <Avatar size={10} source={avatar} />
    </div>
    <div>
      <div className="-mt-px flex divide-x divide-gray-200">
        <div className="w-0 flex-1 flex">
          <Link
            to={`/person/${id}`}
            className="relative -mr-px w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-bl-lg hover:text-gray-500"
          >
            View
          </Link>
        </div>
        <div className="-ml-px w-0 flex-1 flex">
          <button className="relative w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-br-lg hover:text-gray-500">
            Add as Friend
          </button>
        </div>
      </div>
    </div>
  </li>
);

export default PeopleListItem;
