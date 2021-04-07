const Recipe = require("../models/recipe");
const crudController = require("../utils/crud");

const getUserRecipes = async (req, res) => {
  const { id } = req.params;
  try {
    const recipes = await Recipe.find({ userId: id }).populate("userId");

    if (!recipes)
      return res.status(400).send({ error: "Couldn't get recipes." });

    return res.status(200).send(recipes);
  } catch (err) {
    console.log(err);
    return res.status(500).send(`Server error: ${err}`);
  }
};

const createOne = async (req, res) => {
  try {
    let recipe = await Recipe.create(req.body);

    recipe = await Recipe.populate(recipe, { path: "userId" });

    return res.status(201).send(recipe);
  } catch (err) {
    console.log(err);
    return res.status(500).send(`Server error: ${err}`);
  }
};

module.exports = { ...crudController(Recipe), getUserRecipes, createOne };
