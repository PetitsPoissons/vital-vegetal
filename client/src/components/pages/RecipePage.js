// React imports
import React from 'react';

// Components
import RecipeList from '../recipes/RecipeList';

const RecipePage = () => {
  return (
    <div className="container" style={{ marginTop: '5rem' }}>
      <RecipeList />
    </div>
  );
};

export default RecipePage;
