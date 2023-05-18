import "./App.css";
import { Routes, Route } from "react-router-dom";
import NavbarUP from  './components/NavbarUP'
import Home from "./pages/Home";
import Favorite from "./pages/Favorite";
import Contact from "./pages/Contact";
import Recipe from "./pages/Recipe";
function App() {
  return (
    <div className="App m-auto p-4">
      <NavbarUP />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Favorite" element={<Favorite />} />
        <Route path="Contact" element={<Contact />} />
        <Route path="Recipe" element={<Recipe />} />
      </Routes>
    </div>
  );
}

export default App;
