import PreviousSearches from "../components/PreviousSearches";
import RecipeCard from "../components/RecipeCard";

export default function Recipes() {
  
  const recipes = [
    {
      title: "Chicken Pan Pizza",
      image: "/img/gallery/img_1.jpg",
      authorImg: "/img/top-chiefs/img_1 (2).jpg",
    },
    {
      title: "Spaghetti and Meatballs",
      image: "/img/gallery/img_4.jpg",
      authorImg: "/img/top-chiefs/img_2 (2).jpg",
    },
    {
      title: "American Cheese Burger",
      image: "/img/gallery/img_5.jpg",
      authorImg: "/img/top-chiefs/img_3 (2).jpg",
    },
    {
      title: "Mutton Biriyani",
      image: "/img/gallery/img_6.jpg",
      authorImg: "/img/top-chiefs/img_4 (2).jpg",
    },
    {
      title: "Japanese Shushi",
      image: "/img/gallery/img_10.jpg",
      authorImg: "/img/top-chiefs/img_5 (2).jpg",
    },
    {
      title: "Chicken Pan Pizza",
      image: "/img/gallery/img_1.jpg",
      authorImg: "/img/top-chiefs/img_6 (2).jpg",
    },
    {
      title: "Spaghetti",
      image: "/img/gallery/img_4.jpg",
      authorImg: "/img/top-chiefs/img_3 (2).jpg",
    },
    {
      title: "Chicken Pan Pizza",
      image: "/img/gallery/img_1.jpg",
      authorImg: "/img/top-chiefs/img_1 (2).jpg",
    },
    {
      title: "Japanese Shushi",
      image: "/img/gallery/img_10.jpg",
      authorImg: "/img/top-chiefs/img_4 (2).jpg",
    },
    {
      title: "Mutton Biriyani",
      image: "/img/gallery/img_6.jpg",
      authorImg: "/img/top-chiefs/img_5 (2).jpg",
    },
    {
      title: "American Cheese Burger",
      image: "/img/gallery/img_5.jpg",
      authorImg: "/img/top-chiefs/img_6 (2).jpg",
    },
  ].sort(() => Math.random() - 0.5)


  return (
    <div>
   < PreviousSearches />
   <div className="recipes-container">
    {/* < RecipeCard /> */}
  {recipes.map((recipe, index) => (
    <RecipeCard key={index} recipe={recipe} />
  ))}
   </div>
    </div>
  );
}
