import {
  ADD_RECIPE,
  GET_RECIPES,
  GET_RECIPE,
  RECIPE_ERROR,
} from '../actions/types';

const initialState = {
  loading: true,
  recipes: [],
  selectedRecipe: null,
  errorMessage: null,
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_RECIPES:
      return {
        ...state,
        loading: false,
        recipes: payload,
      };
    case GET_RECIPE:
      return {
        ...state,
        loading: false,
        selectedRecipe: payload,
      };
    case RECIPE_ERROR:
      return {
        ...state,
        loading: false,
        errorMessage: payload,
      };
    default:
      return state;
  }
}
