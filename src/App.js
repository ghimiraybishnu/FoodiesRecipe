import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"


import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Recipes from "./pages/Recipes";
import Settings from "./pages/Settings";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Explore from "./components/Explore";
import RecipeDetailsPage from "./components/RecipeDetailsPage";


function App() {
  return (
    <Router>
  < Navbar />
  <div className="container main">
  < Routes>
  < Route path="/" element={<Home />} />
  < Route path="/recipes" element={<Recipes />} />
  < Route path="/settings" element={<Settings />} />
  <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/recipe/:id" element={<RecipeDetailsPage />} />
  
  </Routes>

  </div>
<Footer />
    </Router>

  
  )
}

export default App;
