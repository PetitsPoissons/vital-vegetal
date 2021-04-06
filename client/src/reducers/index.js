import { combineReducers } from 'redux';
import authReducer from './authReducer';
import ingredientReducer from './ingredientReducer';
import recipeReducer from './recipeReducer';

export default combineReducers({
  auth: authReducer,
  ingredient: ingredientReducer,
  recipe: recipeReducer,
});
