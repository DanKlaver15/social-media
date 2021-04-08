import React from "react";
import RecipeListItem from "./RecipeListItem";

const RecipeList = ({ recipes }) => (
  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
    {recipes.map((recipe) => (
      <RecipeListItem key={recipe._id} recipe={recipe} />
    ))}
  </div>
);

export default RecipeList;
