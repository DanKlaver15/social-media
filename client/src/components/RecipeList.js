import React from "react";
import RecipeListItem from "./RecipeListItem";

const RecipeList = ({ recipes }) =>
  recipes.map((recipe) => <RecipeListItem recipe={recipe} />);

export default RecipeList;
