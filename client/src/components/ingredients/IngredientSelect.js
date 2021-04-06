// React imports
import React, { useEffect } from 'react';

// Redux imports
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getIngredients } from '../../actions/ingredientActions';

// Style & Images
import M from 'materialize-css';

const IngredientSelect = ({
  getIngredients,
  ingredient: { loading, ingredients },
}) => {
  useEffect(() => {
    getIngredients();
    let selectEl = document.querySelectorAll('select');
    M.FormSelect.init(selectEl);
  }, [getIngredients]);

  return loading ? (
    <p>LOADING...</p>
  ) : (
    <select>
      <option value="" disabled selected>
        Choose your option
      </option>
      {ingredients.map((ingredient) => (
        <option key={ingredient._id} value={ingredient._id}>
          {ingredient.name}
        </option>
      ))}
    </select>
  );
};

IngredientSelect.propTypes = {
  getIngredients: PropTypes.func.isRequired,
  ingredient: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  ingredient: state.ingredient,
});

export default connect(mapStateToProps, { getIngredients })(IngredientSelect);
