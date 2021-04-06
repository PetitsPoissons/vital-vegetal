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
    type: String,
  },
  instructions: [
    {
      step: { type: String },
      instructionText: { type: String },
    },
  ],
  note: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Recipe = mongoose.model('recipe', RecipeSchema);
module.exports = Recipe;
