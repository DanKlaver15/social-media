import React from "react";

const UserBio = ({ bio }) => (
  <div className="bg-white px-4 py-6 shadow sm:rounded-lg sm:px-6">
    <div className="sm:flex sm:justify-between sm:items-baseline">
      <h3 className="text-base font-medium">About</h3>
    </div>
    <div className="mt-4 space-y-6 text-sm text-gray-800">{bio}</div>
  </div>
);

export default UserBio;
