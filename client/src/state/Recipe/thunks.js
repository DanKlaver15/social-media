import axios from "axios";
import { authHeader, getError } from "../../helpers/authHeader";

import {
  addRecipe,
  recipesFailure,
  recipesInProgress,
  recipesSuccess,
  removeRecipe,
  updateRecipe,
  updateRecipes,
  getRecipe,
} from "./actions";

export const getRecipesRequest = (userId) => async (dispatch, getState) => {
  dispatch(recipesInProgress());

  try {
    const response = await axios.get(
      `http://localhost:5000/api/users/${userId}/recipes`,
      { headers: authHeader() }
    );

    const data = await response.data;

    dispatch(recipesSuccess());
    dispatch(updateRecipes(data));
  } catch (err) {
    console.log(err);
    dispatch(recipesFailure(getError(err)));
  }
};

export const getRecipeRequest = (recipeId) => async (dispatch, getState) => {
  try {
    const response = await axios.get(
      `http://localhost:5000/api/recipes/${recipeId}`,
      { headers: authHeader() }
    );

    const data = await response.data;

    dispatch(getRecipe(data));
  } catch (err) {
    console.log(err);
  }
};

export const addRecipeRequest = (recipe) => async (dispatch, getState) => {
  try {
    const response = await axios.post(
      `http://localhost:5000/api/recipes`,
      recipe,
      {
        headers: authHeader(),
      }
    );

    const data = await response.data;

    dispatch(addRecipe(data));
  } catch (err) {
    console.log(err);
  }
};

export const updateRecipeRequest = (recipe) => async (dispatch, getState) => {
  try {
    const response = await axios.put(
      `http://localhost:5000/api/recipes/${recipe._id}`,
      recipe,
      { headers: authHeader() }
    );

    const data = await response.data;

    dispatch(updateRecipe(data));
  } catch (err) {
    console.error(err);
  }
};

export const removeRecipeRequest = (recipeId) => async (dispatch, getState) => {
  try {
    const response = await axios.delete(
      `http://localhost:5000/api/recipes/${recipeId}`,
      { headers: authHeader() }
    );

    const data = await response.data;

    dispatch(removeRecipe(data._id));
  } catch (err) {
    console.error(err);
  }
};
