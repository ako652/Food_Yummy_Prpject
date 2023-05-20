
import React from "react";
import CardImageFavorites from '../components/CardImageFavorites'

export default function Favorite({recipes,favorites}) {
  
  

  return (
    <div>
      <h2>Favorite Recipes</h2>
      {recipes.length === 0 ? (
        <p>No favorite recipes yet.</p>
      ) : (
        <div className="grid grid-cols-3 gap-4">
          {favorites.map((recipe) => (
            <CardImageFavorites recipe={recipe} key={recipe.idMeal} />
          ))}
        </div>
      )}
    </div>
  );
}
