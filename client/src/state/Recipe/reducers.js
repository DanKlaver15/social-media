import { LOGOUT } from "../User/actions";
import {
  ADD_RECIPE,
  GET_RECIPE,
  RECIPES_FAILURE,
  RECIPES_IN_PROGRESS,
  RECIPES_SUCCESS,
  REMOVE_RECIPE,
  UPDATE_RECIPE,
  UPDATE_RECIPES,
} from "./actions";

export const loadingRecipes = (state = false, action) => {
  const { type } = action;

  switch (type) {
    case RECIPES_IN_PROGRESS: {
      return true;
    }
    case RECIPES_SUCCESS: {
      return false;
    }
    case RECIPES_FAILURE: {
      return false;
    }

    default:
      return state;
  }
};

export const recipes = (state = [], action) => {
  const { type, payload } = action;

  switch (type) {
    case UPDATE_RECIPES: {
      const { recipes } = payload;
      return recipes;
    }
    case ADD_RECIPE: {
      const { recipe } = payload;
      return [...state, recipe];
    }
    case UPDATE_RECIPE: {
      const { recipe } = payload;
      return state.map((stateRecipe) => {
        if (stateRecipe._id === recipe._id) {
          return recipe;
        }
        return stateRecipe;
      });
    }
    case REMOVE_RECIPE: {
      const { recipeId } = payload;
      return state.filter((recipe) => recipeId === recipe._id);
    }
    case LOGOUT: {
      return [];
    }
    default:
      return state;
  }
};

export const recipe = (state = {}, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_RECIPE: {
      const { recipe } = payload;
      return recipe;
    }
    case LOGOUT: {
      return {};
    }
    default:
      return state;
  }
};

const recipeReducers = {
  loadingRecipes,
  recipes,
  recipe,
};

export default recipeReducers;
