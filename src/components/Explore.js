import Axios from "axios";
import { useState, useSyncExternalStore } from "react";
import RecipeTile from "./RecipeTile";

export default function Explore() {
  const [query, setquery] = useState("");
  const [recipes, setrecipes ] = useState([]);
const [ healthLabels, sethealthLabels ] = useState("vegan");

  var url = `https://api.edamam.com/search?q=${query}&app_id=915274af&app_key=aba1ff8b5438b1109d0a08ccc0470296%09&calories=591-722&health=${healthLabels}`;
  async function getRecipes() {
    var result = await Axios.get(url);
    setrecipes(result.data.hits);
    console.log(result.data);
  }

const onSubmit = (e) => {
  e.preventDefault();
  getRecipes();

}

  return (
    <div className="App">
      <h1>Explore Food Recipe Plaza </h1>
      <form className="app__searchForm" onSubmit={onSubmit} >
        <input className="app__input"
          type="text"
          placeholder="Enter Ingridient"
          value={query}
          onChange={(e) => setquery(e.target.value)}
        />
        <input className="app__submit" type="submit" value="Search" />

        <select className="app_healthLabels" >
          <option onClick={() => sethealthLabels("") }
          >...</option>
          <option onClick={() => sethealthLabels("vegan") }
          >Vegan</option>
          <option onClick={() => sethealthLabels("vegetarian") }
          >Vegetarian</option>
          <option onClick={() => sethealthLabels("paleo") }
          >Paleo</option>
          <option onClick={() => sethealthLabels("dairy-free") }
          >Dairy-free</option>
          <option onClick={() => sethealthLabels("gluten-free") }
          >Gluten-free</option>
          <option onClick={() => sethealthLabels("wheat-free") }
          >Wheat-free</option> 
          <option onClick={() => sethealthLabels("low-sugar") }
          >Low-sugar</option> 
          <option onClick={() => sethealthLabels("egg-free") }
          >Egg-free</option>   


           
        </select>

      </form>

<div className="app__recipes">
  { recipes.map((recipe) => {
return <RecipeTile recipe={recipe} key={recipe.recipe.label} />;
  })}
</div>
    </div>
  );
}