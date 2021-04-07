import React from "react";
import RecipeListItem from "./RecipeListItem";

const RecipeList = ({ recipes }) => (
  <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
    {recipes.map((recipe) => (
      <RecipeListItem recipe={recipe} />
    ))}
  </div>
);

export default RecipeList;
