import axios from 'axios';
import { ADD_RECIPE, GET_RECIPES, GET_RECIPE, RECIPE_ERROR } from './types';

// Get recipes
export const getRecipes = () => async (dispatch) => {
  try {
    const res = await axios.get('/api/recipes');
    dispatch({
      type: GET_RECIPES,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
    dispatch({
      type: RECIPE_ERROR,
      payload: 'Server error',
    });
  }
};

// Get recipe by ID
export const getRecipe = (recipeId) => async (dispatch) => {
  console.log('recipeId', recipeId);
  try {
    const res = await axios.get(`api/recipes/${recipeId}`);
    console.log(res.data);
    dispatch({
      type: GET_RECIPE,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
    dispatch({
      type: RECIPE_ERROR,
      payload: 'Recipe not found',
    });
  }
};

// Add a recipe
export const addRecipe = (formData) => async (dispatch) => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const res = await axios.post('/api/recipes', formData, config);
    dispatch({
      type: ADD_RECIPE,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
    dispatch({
      type: RECIPE_ERROR,
      payload: 'Server error',
    });
  }
};
