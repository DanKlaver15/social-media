import React from "react";

const List = ({ item, Icon }) => (
  <li>
    <div className="relative pb-8">
      <div className="relative flex space-x-3">
        <div>
          <span className="h-8 w-8 rounded-full bg-green-500 flex items-center justify-center ring-8 ring-white">
            <Icon />
          </span>
        </div>
        <div className="min-w-0 flex-1 pt-1.5 flex justify-between space-x-4">
          <div>
            <p className="text-sm text-gray-500">{item}</p>
          </div>
        </div>
      </div>
    </div>
  </li>
);

export default List;
