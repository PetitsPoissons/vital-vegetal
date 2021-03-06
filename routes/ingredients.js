const express = require('express');
const router = express.Router();
const checkToken = require('../helpers/checkToken');
const Ingredient = require('../models/Ingredient');

// @route - POST api/ingredients
// @desc - Create an ingredient
// @access - Private
router.post('/', checkToken, async (req, res) => {
  const { name, type, description } = req.body;
  if (!name) {
    return res.status(400).json({
      errorMsg: 'Missing name of ingredient',
    });
  }
  // check if ingredient already exists in db
  const ingredient = await Ingredient.findOne({ name });
  if (ingredient) {
    return res.status(400).json({ errorMsg: 'Ingredient already exists' });
  }

  // instantiate and save the new ingredient
  try {
    const newIngredient = await new Ingredient({
      addedBy: req.userId,
      name,
      type,
      description,
    }).save();
    res.status(200).json(newIngredient);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// @route   GET api/ingredients
// @desc    Get all ingredients
// @access  Public
router.get('/', async (req, res) => {
  try {
    const ingredients = await Ingredient.find()
      .select('-__v')
      .sort({ name: 1 });
    res.json(ingredients);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

module.exports = router;
