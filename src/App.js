import "./App.css";
import { Routes, Route } from "react-router-dom";
import NavbarUP from "./components/NavbarUP";
import Home from "./pages/Home";
import Favorite from "./pages/Favorite";
import Contact from "./pages/Contact";
import Recipe from "./pages/Recipe";
import { useState, useEffect } from "react";

function App() {
  const [recipes, setRecipes] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [number ,setNumber]=useState(0)
  const [userInput, setUserInput] =useState('')
  const [filter, setFilter]=useState([])

  useEffect(() => {
    const fetchRecipes = async () => {
      const url = "https://www.themealdb.com/api/json/v1/1/search.php?s=";
      try {
        const response = await fetch(url);
        const data = await response.json();
        setRecipes(data.meals);
      } catch (error) {
        console.error(error);
      }
    };

    fetchRecipes();
    
  }, []);
  useEffect(()=>{
  const filter = recipes.filter((ele) => ele.strMeal.toLowerCase().includes(userInput));
    setFilter(filter)
  },[recipes,userInput])

  const handleFavoriteClick = (recipe) => {
    if (favorites.includes(recipe) && recipes.includes(recipe)) {
      const updatedFavorites = favorites.filter(
        (fav) => fav.idMeal !== recipe.idMeal
      );
       const updatedNumber = number - 1;
       setNumber(updatedNumber);
      setFavorites(updatedFavorites);
    } else {
      setFavorites([...favorites, recipe]);
       const updatedNumber = number + 1;
       setNumber(updatedNumber);
    }

    
  }; 

  const handleSearch =(event)=>{
   setUserInput(event.target.value.toLowerCase())
  }
  
  return (
    <div className="App m-auto p-4">
      <NavbarUP number={number}/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="Favorite"
          element={<Favorite recipes={recipes} favorites={favorites} />}
        />
        <Route path="Contact" element={<Contact />} />
        <Route
          path="Recipe"
          element={
            <Recipe
              
              favorites={favorites}
              handleFavoriteClick={handleFavoriteClick}
              handleSearch={handleSearch}
              userInput={userInput}
              filter={filter}
             
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
