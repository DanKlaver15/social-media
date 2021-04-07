import React, { useReducer, useState } from "react";
import IngredientField from "../forms/components/IngredientField";

function ingredientReducer(state, action) {
  const { type, payload } = action;
  switch (type) {
    case "ADD_INGREDIENT": {
      return [...state, ""];
    }
    case "REMOVE_INGREDIENT": {
      const { ingredientIndex } = payload;
      console.log(state.length);
      if (state.length === 1) {
        return state;
      }
      return state.filter((ingredient, index) => index === ingredientIndex);
    }
    case "UPDATE_INGREDIENT": {
      const { ingredientIndex, value } = payload;
      return state.map((ingredient, index) => {
        if (index === ingredientIndex) {
          return value;
        }
        return ingredient;
      });
    }
    default: {
      return state;
    }
  }
}

const AddRecipeForm = () => {
  const [ingredients, setIngredients] = useReducer(ingredientReducer, [""]);
  const [numIngredients, setNumIngredients] = useState(1);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const ingredientFields = () => {
    let fields = [];

    for (let i = 0; i < numIngredients; i++) {
      fields.push(
        <IngredientField
          key={i}
          value={ingredients[i]}
          index={i + 1}
          setInput={(e) => {
            e.preventDefault();
            setIngredients({
              type: "UPDATE_INGREDIENT",
              payload: { ingredientIndex: i, value: e.target.value },
            });
          }}
          remove={(e) => {
            e.preventDefault();
            setIngredients({
              type: "REMOVE_INGREDIENT",
              payload: { ingredientIndex: i },
            });
            if (numIngredients > 1) {
              setNumIngredients(numIngredients - 1);
            }
          }}
        />
      );
    }

    return fields;
  };

  return (
    <form className="space-y-8 divide-y divide-gray-200">
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
            {ingredientFields().map((field) => field)}
            <div className="pt-5">
              <div className="flex justify-start">
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    setNumIngredients(numIngredients + 1);
                    setIngredients({ type: "ADD_INGREDIENT" });
                  }}
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
            {ingredientFields().map((field) => field)}
            <div className="pt-5">
              <div className="flex justify-start">
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    setNumIngredients(numIngredients + 1);
                    setIngredients({ type: "ADD_INGREDIENT" });
                  }}
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
            type="button"
            className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Save
          </button>
        </div>
      </div>
    </form>
  );
};

export default AddRecipeForm;
