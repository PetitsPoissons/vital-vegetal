// React imports
import React, { useState } from 'react';

// Redux imports
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addRecipe } from './actions/recipeActions';

// Components
import IngredientSelect from '../ingredients/IngredientSelect';

const AddRecipe = ({ addRecipe }) => {
  const [recipeIngredients, setRecipeIngredients] = useState([]);
  return (
    <>
      <div class="input-field col s7">
        <IngredientSelect />
      </div>
      <div class="input-field col s5">
        <div className="row">
          <div className="col s12">
            Enter the quantity:
            <div className="input-field inline">
              <input type="text" id="ingredientQuantity" className="validate" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

AddRecipe.propTypes = {
  addRecipe: PropTypes.func.isRequired,
};

export default connect(null, { addRecipe })(AddRecipe);
