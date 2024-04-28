import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Axios from 'axios';

function RecipeDetailsPage() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchRecipe() {
      try {
        const response = await Axios.get(`https://api.edamam.com/search?q=chicken&app_id=915274af&app_key=aba1ff8b5438b1109d0a08ccc0470296%09&calories=591-722&health=alcohol-free`);
        console.log("");
        const recipes = response.data.hits;
        const selectedRecipe = recipes.find(item => item.recipe.uri === id);
        
        if (selectedRecipe) {
          setRecipe(selectedRecipe.recipe);
        } else {
          setError('Recipe not found');
        }
      } catch (error) {
        setError('Error fetching recipe details');
      } finally {
        setLoading(false);
      }
    }

    fetchRecipe();
  }, [id]);

  if (loading) return <p>Loading recipe details...</p>;
  if (error) return <p>{error}</p>;
  if (!recipe) return null;

  return (
    <div>
      <h2>Recipe Details</h2>
      <p><strong>Recipe Name:</strong> {recipe.label}</p>
      <p><strong>Ingredients:</strong> {recipe.ingredientLines.join(', ')}</p>
      <p><strong>Calories:</strong> {Math.round(recipe.calories)}</p>
      <p><strong>Health Labels:</strong> {recipe.healthLabels.join(', ')}</p>
      <p><strong>Source:</strong> <a href={recipe.url} target="_blank" rel="noopener noreferrer">{recipe.source}</a></p>
      <p><strong>Image:</strong> <img src={recipe.image} alt={recipe.label} /></p>
      <p>
        <strong>Navigation:</strong> 
        <Link to="/recipes">Back to Recipes</Link>
      </p>
    </div>
  );
}

export default RecipeDetailsPage;
