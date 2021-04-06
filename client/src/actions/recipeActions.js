import axios from 'axios';
import { ADD_RECIPE, GET_RECIPES, GET_RECIPE, RECIPE_ERROR } from './types';

// Get recipes
export const getRecipes = () => async (dispatch) => {
  try {
    const res = await axios.get('/api/recipes');
    console.log('GET_RECIPES - payload', res.data);
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
