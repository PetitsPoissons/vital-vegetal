const mongoose = require('mongoose');

const RecipeIngredientsSchema = new mongoose.Schema({
  recipeId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'recipe',
    required: true,
  },
  ingredientId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'ingredient',
    required: true,
  },
  quantity: {
    type: String,
    required: true,
  },
  note: {
    type: String,
  },
});

const RecipeIngredients = mongoose.model(
  'recipeIngredients',
  RecipeIngredientsSchema
);
module.exports = RecipeIngredients;
