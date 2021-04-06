import axios from 'axios';
import {
  ADD_INGREDIENT,
  GET_INGREDIENTS,
  GET_INGREDIENT,
  INGREDIENT_ERROR,
} from './types';

// Get ingredients
export const getIngredients = () => async (dispatch) => {
  try {
    const res = await axios.get('/api/ingredients');
    dispatch({
      type: GET_INGREDIENTS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
    dispatch({
      type: INGREDIENT_ERROR,
      payload: 'Server error',
    });
  }
};
