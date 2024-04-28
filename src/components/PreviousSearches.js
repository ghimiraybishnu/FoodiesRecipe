import { FontAwesomeIcon }  from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export default function PreviousSearches() {

    const searches = [
        "pizza",
        "burger",
        "cookies",
        "juice",
        "biriyani",
        "salad",
        "ice-cream",
        "lasagna",
        "pudding",
        "soup",
      ];

  return (
    <div className="previous-searches section">
      <h2>Previous Searches</h2>
      <div className="previous-searches-container">
        {searches.map((search, index) => (
          <div
            key={index}
            style={{ animationDelay: index * 0.1 + "s" }}
            className="search-item"
          >
            {search}
          </div>
        ))}
      </div>
      <div className="search-box">
        {/* <input type="text" placeholder="Search for a recipe.." /> */}
        <button className="btn" >
          <FontAwesomeIcon icon={faSearch} />
          <Link to="/Explore">To</Link>
        </button>
      </div>
    </div>
  );
}
