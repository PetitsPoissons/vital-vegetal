// React imports
import React from 'react';

// Style & Images
import M from 'materialize-css';
import customGranola from '../../assets/custom-granola.png';

const RecipeOverview = ({ recipe }) => {
  return (
    <div className="card sticky-action">
      <div className="card-image waves-effect waves-block waves-light">
        <img className="activator" src={customGranola} />
      </div>
    </div>
  );
};

export default RecipeOverview;
