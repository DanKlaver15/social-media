import React, { useState } from "react";
import { connect } from "react-redux";
import useDyanmicFields from "../hooks/useDynamicFields";
import { addRecipeRequest } from "../../state/Recipe/thunks";

const AddRecipeForm = ({ userId, addRecipe }) => {
  const [
    ingredients,
    setIngredientInput,
    addIngredientField,
    removeIngredientField,
  ] = useDyanmicFields();
  const [
    directions,
    setDirectionInput,
    addDirectionField,
    removeDirectionField,
  ] = useDyanmicFields();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        addRecipe({
          title,
          directions: [...directions.map((direction) => direction.value)],
          ingredients: [...ingredients.map((ingredient) => ingredient.value)],
          userId,
          description,
        });
      }}
      className="space-y-8 divide-y divide-gray-200"
    >
      <div className="space-y-8 divide-y divide-gray-200">
        <div>
          <div>
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              Add Recipe
            </h3>
            <p className="mt-1 text-sm text-gray-500">
              Add a recipe to share with your friends!
            </p>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
            <div className="sm:col-span-4">
              <label
                htmlFor="title"
                className="block text-sm font-medium text-gray-700"
              >
                Title
              </label>
              <div className="mt-1 flex rounded-md shadow-sm">
                <input
                  onChange={(e) => setTitle(e.target.value)}
                  value={title}
                  type="text"
                  name="title"
                  id="title"
                  className="flex-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full min-w-0 rounded-none rounded-md sm:text-sm border-gray-300"
                />
              </div>
            </div>

            <div className="sm:col-span-6">
              <label
                htmlFor="description"
                className="block text-sm font-medium text-gray-700"
              >
                Description
              </label>
              <div className="mt-1">
                <textarea
                  onChange={(e) => {
                    setDescription(e.target.value);
                  }}
                  value={description}
                  id="description"
                  name="description"
                  rows="3"
                  className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                ></textarea>
              </div>
              <p className="mt-2 text-sm text-gray-500">
                Write a few sentences about your recipe.
              </p>
            </div>
          </div>
        </div>

        <div className="pt-8">
          <div>
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              Ingredients
            </h3>
            <p className="mt-1 text-sm text-gray-500">
              Add ingredients to your recipe. Make sure to include the quantity!
            </p>
          </div>
          <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
            {ingredients.map((Ingredient, index) => (
              <Ingredient.Component
                name="Ingredient"
                key={index}
                index={index + 1}
                currentValue={Ingredient.value}
                setInput={setIngredientInput(index)}
                remove={removeIngredientField(index)}
              />
            ))}
            <div className="pt-5">
              <div className="flex justify-start">
                <button
                  onClick={addIngredientField}
                  className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Add Ingredient
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8">
          <div>
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              Directions
            </h3>
            <p className="mt-1 text-sm text-gray-500">
              Add step-by-step instructions to help your friends follow along.
            </p>
          </div>
          <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
            {directions.map((Direction, index) => (
              <Direction.Component
                name="Step"
                key={index}
                index={index + 1}
                currentValue={Direction.value}
                setInput={setDirectionInput(index)}
                remove={removeDirectionField(index)}
              />
            ))}
            <div className="pt-5">
              <div className="flex justify-start">
                <button
                  onClick={addDirectionField}
                  className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Add Ingredient
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-5">
        <div className="flex justify-end">
          <button
            type="submit"
            className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Add Recipe
          </button>
        </div>
      </div>
    </form>
  );
};

const mapStateToProps = (state) => ({
  userId: state.user._id,
});

const mapDispatchToProps = (dispatch) => ({
  addRecipe: (recipe) => dispatch(addRecipeRequest(recipe)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddRecipeForm);
