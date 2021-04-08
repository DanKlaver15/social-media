import React from "react";

const UserBio = ({ bio }) => (
  <div class="bg-white px-4 py-6 shadow sm:rounded-lg sm:px-6">
    <div class="sm:flex sm:justify-between sm:items-baseline">
      <h3 class="text-base font-medium">About</h3>
    </div>
    <div class="mt-4 space-y-6 text-sm text-gray-800">{bio}</div>
  </div>
);

export default UserBio;
