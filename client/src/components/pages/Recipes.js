import React, { useEffect } from "react";
import { connect } from "react-redux";
import RecipeList from "../RecipeList";
import AddRecipeForm from "../forms/AddRecipeForm";
import { getRecipesRequest } from "../../state/Recipe/thunks.js";

const Recipes = ({ userId, recipes, getRecipes }) => {
  useEffect(() => {
    if (userId) {
      getRecipes(userId);
    }
  }, [userId, getRecipes]);

  return (
    <>
      {recipes && recipes.length > 0 ? (
        <RecipeList recipes={recipes} />
      ) : (
        <div>You have no recipes</div>
      )}
    </>
  );
};

const mapStateToProps = (state) => ({
  userId: state.user._id,
  recipes: state.recipes,
});

const mapDispatchToProps = (dispatch) => ({
  getRecipes: (userId) => dispatch(getRecipesRequest(userId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Recipes);
