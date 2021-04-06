// React imports
import React, { useEffect } from 'react';

// Redux imports
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getRecipes } from '../../actions/recipeActions';

// Components
import RecipeOverview from './RecipeOverview';

const RecipeList = ({ getRecipes, recipe: { loading, recipes } }) => {
  useEffect(() => {
    getRecipes();
  }, [getRecipes]);

  return loading ? (
    <p>LOADING...</p>
  ) : (
    <div className="container recipe-cards">
      {recipes.map((recipe) => (
        <RecipeOverview key={recipe._id} recipe={recipe} />
      ))}
    </div>
  );
};

RecipeList.propTypes = {
  getRecipes: PropTypes.func.isRequired,
  recipe: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  recipe: state.recipe,
});

export default connect(mapStateToProps, { getRecipes })(RecipeList);
