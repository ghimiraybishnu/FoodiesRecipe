import React from "react";

export default function RecipeTile({ recipe }) {
  return (
    // recipe["recipe"]["image"].match(/\.(jpeg|jpg|gif|png)$/)
    // != null && (
        
    <div className="recipeTile">
      <img className="recipeTile__img" src={recipe["recipe"]["image"]} />
      <p className="recipeTile__name">{recipe["recipe"]["label"]}</p>
    </div>
    
  );
}
