import React from "react";
import Avatar from "./Avatar";
import { Link } from "react-router-dom";

const RecipeListItem = ({ recipe }) => (
  <div class="relative rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm flex items-center space-x-3 hover:border-gray-400 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
    <div class="flex-shrink-0">
      <Avatar size={10} source={recipe.userId.avatar} />
    </div>
    <div class="flex-1 min-w-0">
      <Link to={`/recipe/${recipe._id}`} className="focus:outline-none">
        <span class="absolute inset-0" aria-hidden="true"></span>
        <p class="text-sm font-medium text-gray-900">{recipe.title}</p>
        <p class="text-sm text-gray-500 truncate">{recipe.description}</p>
      </Link>
    </div>
  </div>
);

export default RecipeListItem;
