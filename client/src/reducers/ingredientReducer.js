import {
  ADD_INGREDIENT,
  GET_INGREDIENTS,
  GET_INGREDIENT,
  INGREDIENT_ERROR,
} from '../actions/types';

const initialState = {
  loading: true,
  ingredients: [],
  selectedIngredient: null,
  errorMessage: null,
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_INGREDIENTS:
      return {
        ...state,
        loading: false,
        ingredients: payload,
      };
    case INGREDIENT_ERROR:
      return {
        ...state,
        loading: false,
        errorMessage: payload,
      };
    default:
      return state;
  }
}
