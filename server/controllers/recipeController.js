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

module.exports = { ...crudController(Recipe), getUserRecipes };
