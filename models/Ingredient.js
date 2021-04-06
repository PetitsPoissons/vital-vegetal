const mongoose = require('mongoose');

const IngredientSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  type: {
    type: String,
    trim: true,
  },
  description: {
    type: String,
  },
  addedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
    required: true,
  },
});

const Ingredient = mongoose.model('ingredient', IngredientSchema);
module.exports = Ingredient;
