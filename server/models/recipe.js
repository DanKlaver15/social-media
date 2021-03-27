const mongoose = require("mongoose");
const { commentSchema } = require("./comment");

const recipeSchema = new mongoose.Schema({
  title: { type: String, required: true, minlength: 3 },
  caloriesPerServing: { type: Number },
  comments: [commentSchema],
  cookTime: { type: Number, minLength: 1 },
  description: { type: String, required: true, minlength: 5 },
  directions: [{ type: String }],
  ingredients: [
    {
      name: { type: String, required: true, minlength: 3 },
      quantity: {
        amount: { type: Number, required: true, minlength: 1 },
        unit: { type: String, required: true, minlength: 1 },
      },
    },
  ],
  likes: { type: Number, default: 0 },
  prepTime: { type: Number, required: true },
  rating: [
    {
      number: { type: Number },
      raterId: { type: mongoose.Types.ObjectId },
    },
  ],
  averageRating: {
    type: Number,
    default: function () {
      let total = 0;
      for (let i = 0; i < this.rating.length; i++) {
        total += this.rating[i];
      }
      return total / this.rating.length;
    },
  },
  servings: { type: Number, required: true, minglength: 1 },
  tags: [{ type: String }],
  category: { type: String },
  date: { type: Date, default: Date.now },
  userId: { type: mongoose.Types.ObjectId },
});

const Recipe = mongoose.model("Recipe", recipeSchema);

module.exports = Recipe;
