const mongoose = require("mongoose");
const { commentSchema } = require("./comment");

const recipeSchema = new mongoose.Schema({
  title: { type: String, required: true, minlength: 3 },
  caloriesPerServing: { type: Number },
  comments: [commentSchema],
  cookTime: { type: Number, minLength: 1 },
  description: { type: String, minlength: 5 },
  directions: [{ type: String, required: true }],
  ingredients: [
    {
      type: String,
      required: true,
      minlength: 3,
    },
  ],
  likes: { type: Number, default: 0 },
  prepTime: { type: Number },
  servings: { type: Number, minglength: 1 },
  date: { type: Date, default: Date.now },
  userId: { type: mongoose.Types.ObjectId, ref: "User", required: true },
});

const Recipe = mongoose.model("Recipe", recipeSchema);

module.exports = Recipe;
