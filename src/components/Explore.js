import React, { useState, useEffect } from "react";

export default function Explore() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch("https://edamam-recipe-search.p.rapidapi.com/api/recipes/v2?type=public&co2EmissionsClass=A%2B&field%5B0%5D=uri&beta=true&random=true&cuisineType%5B0%5D=American&imageSize%5B0%5D=LARGE&mealType%5B0%5D=Breakfast&health%5B0%5D=alcohol-cocktail&diet%5B0%5D=balanced&dishType%5B0%5D=Biscuits%20and%20cookies", {
        headers: {
          "x-rapidapi-host": "edamam-recipe-search.p.rapidapi.com",
          "x-rapidapi-key": "YOUR_API_KEY"
        }
      });
      const jsonData = await response.json();
      setData(jsonData.hits || []); // Assuming the API response has a hits property
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div className="explore">
      <h2>Explore</h2>
      <div className="content">
        {data.map((hit, index) => (
          <div key={index} className="item">
            <h3>{hit.recipe.label}</h3>
            <p>{hit.recipe.source}</p>
            {/* Add more content fields as needed */}
          </div>
        ))}
      </div>
    </div>
  );
}
