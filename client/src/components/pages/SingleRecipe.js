import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { getRecipeRequest } from "../../state/Recipe/thunks";
import List from "../List";
import Error from "../Error";
import { CheckCircle, ShoppingCart } from "../Icons/icons";

const SingleRecipe = ({ recipe, getRecipe }) => {
  let { id } = useParams();

  useEffect(() => {
    if (!recipe || Object.entries(recipe).length === 0) {
      getRecipe(id);
    }
  }, [id, recipe, getRecipe]);

  return recipe || Object.entries(recipe).length === 0 ? (
    <section aria-labelledby="applicant-information-title">
      <div className="bg-white shadow sm:rounded-lg">
        <div className="px-4 py-5 sm:px-6">
          <h2
            id="applicant-information-title"
            className="text-lg leading-6 font-medium text-gray-900"
          >
            {recipe.title}
          </h2>
          <p className="mt-1 max-w-2xl text-sm text-gray-500">
            {recipe.description}
          </p>
        </div>
        <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
          <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
            <div className="sm:col-span-1">
              <dt className="text-sm font-medium text-gray-500">Calories</dt>
              <dd className="mt-1 text-sm text-gray-900">{recipe.calories}</dd>
            </div>
            <div className="sm:col-span-1">
              <dt className="text-sm font-medium text-gray-500">Servings</dt>
              <dd className="mt-1 text-sm text-gray-900">{recipe.servings}</dd>
            </div>
            <div className="sm:col-span-1">
              <dt className="text-sm font-medium text-gray-500">Cook Time</dt>
              <dd className="mt-1 text-sm text-gray-900">{recipe.cookTime}</dd>
            </div>
            <div className="sm:col-span-1">
              <dt className="text-sm font-medium text-gray-500">Prep Time</dt>
              <dd className="mt-1 text-sm text-gray-900">{recipe.prepTime}</dd>
            </div>
            <div className="sm:col-span-2">
              <dt className="text-sm font-medium text-gray-500">Ingredients</dt>
              <dd className="mt-4 text-sm text-gray-900">
                <div className="flow-root">
                  <ul className="-mb-8">
                    {/* {recipe.ingredients.map((ingredient) => (
                      <List item={ingredient} icon={ShoppingCart} />
                    ))} */}
                  </ul>
                </div>
              </dd>
            </div>
            <div className="sm:col-span-2">
              <dt className="text-sm font-medium text-gray-500">Directions</dt>
              <dd className="mt-4 text-sm text-gray-900">
                <div className="flow-root">
                  <ul className="-mb-8">
                    {/* {recipe.directions.map((direction) => (
                      <List item={direction} icon={CheckCircle} />
                    ))} */}
                  </ul>
                </div>
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  ) : (
    <Error message={"Unable to load recipe."} />
  );
};

const mapStateToProps = (state) => ({
  recipe: state.recipe,
});

const mapDispatchToProps = (dispatch) => ({
  getRecipe: (recipeId) => dispatch(getRecipeRequest(recipeId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SingleRecipe);
