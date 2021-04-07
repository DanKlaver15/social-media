import React, { useEffect } from "react";
import { connect } from "react-redux";
import RecipeList from "../RecipeList";
import UserPageHeader from "../UserPageHeader";
import { getRecipesRequest } from "../../state/Recipe/thunks.js";

const Recipes = ({ user, recipes, getRecipes }) => {
  useEffect(() => {
    if (user._id) {
      getRecipes(user._id);
    }
  }, [user._id, getRecipes]);

  return (
    <>
      <UserPageHeader
        name={`${user.firstName} ${user.lastName}`}
        avatar={user.avatar}
      >
        {recipes && recipes.length > 0 ? (
          <RecipeList recipes={recipes} />
        ) : (
          <div>You have no recipes</div>
        )}
      </UserPageHeader>
    </>
  );
};

const mapStateToProps = (state) => ({
  user: state.user,
  recipes: state.recipes,
});

const mapDispatchToProps = (dispatch) => ({
  getRecipes: (userId) => dispatch(getRecipesRequest(userId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Recipes);
