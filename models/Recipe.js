const mongoose = require('mongoose');

const RecipeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  source: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
    required: true,
  },
  category: {
    type: String,
    required: true,
    enum: ['Breakfast', 'Lunch', 'Snack', 'Dinner', 'Dessert', 'Drink'],
  },
  preparationTime: {
    type: String,
  },
  difficulty: {
    type: Number,
  },
  instructions: [],
  note: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  ingredients: [RecipeIngredientsSchema],
});

const Recipe = mongoose.model('recipe', RecipeSchema);
module.exports = Recipe;
