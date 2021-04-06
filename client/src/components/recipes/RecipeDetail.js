// React imports
import React from 'react';
import { Link } from 'react-router-dom';

const RecipeDetail = ({
  recipe: {
    category,
    difficulty,
    image,
    ingredients,
    instructions,
    name,
    note,
    preparationTime,
    recipeId,
    servings,
    source,
  },
}) => {
  return (
    <div className="card sticky-action">
      <div className="card-image waves-effect waves-block waves-light">
        <img className="activator" src={image} />
      </div>
      <div className="card-content">
        <span className="card-title activator blue-grey-text text-darken-4">
          {name}
          <i className="material-icons right">more_vert</i>
        </span>
      </div>
      {/* <div className="card-action">
        <Link to={`/recipe/${recipeId}/reviews`}>See reviews</Link>
        <Link to={`/recipe/${recipeId}/reviews`}>Write a review</Link>
      </div> */}
      <div className="card-reveal blue-grey darken-4">
        <span className="card-title white-text">
          {name}
          <i className="material-icons right">close</i>
        </span>
        <ul className="collection">
          <li className="collection-item">
            <p>
              <span className="recipe-desc">Category:</span> {category}
            </p>
            <p>
              <span className="recipe-desc">Preparation Time:</span>{' '}
              {preparationTime}
            </p>
            <p>
              <span className="recipe-desc">Difficulty:</span> {difficulty}
            </p>
            <p>Yields {servings}</p>
          </li>
          <li className="collection-item">
            <span className="recipe-desc-title">Ingredients:</span>
            <ul className="recipe-ingredients">
              {ingredients.map((ingredient) => (
                <li>
                  {ingredient.quantity} of {ingredient.name}
                </li>
              ))}
            </ul>
          </li>

          <li className="collection-item">
            <span className="recipe-desc-title">Instructions:</span>
            <ol className="recipe-instructions">
              {instructions.map((instruction) => (
                <li>{instruction.instructionText}</li>
              ))}
            </ol>
          </li>
          {note && (
            <li className="collection-item">
              <span className="recipe-desc">Note:</span> {note}
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default RecipeDetail;
