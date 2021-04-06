export const RECIPES_IN_PROGRESS = "RECIPES_IN_PROGRESS";
export const recipesInProgress = () => ({
  type: RECIPES_IN_PROGRESS,
});

export const RECIPES_SUCCESS = "RECIPES_SUCCESS";
export const recipesSuccess = () => ({
  type: RECIPES_SUCCESS,
});

export const RECIPES_FAILURE = "RECIPES_FAILURE";
export const recipesFailure = (error = "Error") => ({
  type: RECIPES_FAILURE,
  payload: { error },
});

export const UPDATE_RECIPES = "UPDATE_RECIPES";
export const updateRecipes = (recipes) => ({
  type: UPDATE_RECIPES,
  payload: { recipes },
});

export const ADD_RECIPE = "ADD_RECIPE";
export const addRecipe = (recipe) => ({
  type: ADD_RECIPE,
  payload: { recipe },
});

export const UPDATE_RECIPE = "UPDATE_RECIPE";
export const updateRecipe = (recipe) => ({
  type: UPDATE_RECIPE,
  payload: { recipe },
});

export const REMOVE_RECIPE = "REMOVE_RECIPE";
export const removeRecipe = (recipeId) => ({
  type: REMOVE_RECIPE,
  payload: { recipeId },
});
