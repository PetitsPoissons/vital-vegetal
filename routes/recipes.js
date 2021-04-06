const express = require('express');
const router = express.Router();
const checkToken = require('../helpers/checkToken');
const Recipe = require('../models/Recipe');
const RecipeIngredients = require('../models/RecipeIngredients');
const Ingredient = require('../models/Ingredient');

// @route - POST api/recipes
// @desc - Create a recipe
// @access - Private
router.post('/', checkToken, async (req, res) => {
  const {
    name,
    category,
    image,
    preparationTime,
    difficulty,
    instructions,
    note,
    ingredients,
  } = req.body;
  if (
    ![name, category, instructions, ingredients].every(Boolean) ||
    instructions == [] ||
    ingredients == []
  ) {
    return res.status(400).json({
      errorMsg: 'Missing inputs',
    });
  }
  try {
    // instantiate and save the new recipe in the Recipe collection
    const newRecipe = await new Recipe({
      source: req.userId,
      name,
      category,
      image,
      preparationTime,
      difficulty,
      instructions,
      note,
    }).save();

    // instantiate and save the related ingredients in the RecipeIngredients collection
    const newRecipeIngredientsList = [];
    for (let i = 0; i < ingredients.length; i++) {
      const newRecipeIngredients = await new RecipeIngredients({
        recipeId: newRecipe._id,
        ingredientId: ingredients[i].ingredientId,
        quantity: ingredients[i].quantity,
        note: ingredients[i].note,
      }).save();
      newRecipeIngredientsList.push(newRecipeIngredients);
    }
    res.status(200).json(newRecipeIngredientsList);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// @route   GET api/recipes
// @desc    Get all recipes
// @access  Public
router.get('/', async (req, res) => {
  try {
    const recipes = await Recipe.find().sort({ name: 1 });
    const recipeObjList = [];
    for (let i = 0; i < recipes.length; i++) {
      const recipeIngredients = await RecipeIngredients.find({
        recipeId: recipes[i]._id,
      }).populate({ path: 'ingredientId', select: '-__v' });
      // create the recipe object to add to recipeObjList
      const recipeObj = {
        recipeId: recipes[i]._id,
        name: recipes[i].name,
        source: recipes[i].source,
        category: recipes[i].category,
        image: recipes[i].image,
        preparationTime: recipes[i].preparationTime,
        difficulty: recipes[i].difficulty,
        servings: recipes[i].servings,
        instructions: recipes[i].instructions,
        note: recipes[i].note,
        createdAt: recipes[i].createdAt,
        ingredients: recipeIngredients.map((item) => {
          return {
            ingredientId: item.ingredientId._id,
            name: item.ingredientId.name,
            type: item.ingredientId.type,
            description: item.ingredientId.description,
            quantity: item.quantity,
            note: item.note,
          };
        }),
      };
      recipeObjList.push(recipeObj);
    }
    res.json(recipeObjList);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// @route   GET api/recipes/:id
// @desc    Get one recipe by ID
// @access  Public
router.get('/:id', async (req, res) => {
  try {
    const recipe = await Recipe.findById(req.params.id);
    if (!recipe) {
      return res.status(404).json({ errorMsg: 'Recipe not found' });
    }
    const recipeIngredients = await RecipeIngredients.find({
      recipeId: recipe._id,
    }).populate({ path: 'ingredientId', select: '-__v' });
    // create the recipe object to return to client
    const recipeObj = {
      recipeId: recipe._id,
      name: recipe.name,
      source: recipe.source,
      category: recipe.category,
      image: recipe.image,
      preparationTime: recipe.preparationTime,
      difficulty: recipe.difficulty,
      servings: recipe.servings,
      instructions: recipe.instructions,
      note: recipe.note,
      createdAt: recipe.createdAt,
      ingredients: recipeIngredients.map((item) => {
        return {
          ingredientId: item.ingredientId._id,
          name: item.ingredientId.name,
          type: item.ingredientId.type,
          description: item.ingredientId.description,
          quantity: item.quantity,
          note: item.note,
        };
      }),
    };
    res.json(recipeObj);
  } catch (err) {
    console.error(err.message);
    if (err.kind === 'ObjectId') {
      return res.status(404).json({ errorMsg: 'Recipe not found' });
    }
    res.status(500).send('Server error');
  }
});

module.exports = router;
