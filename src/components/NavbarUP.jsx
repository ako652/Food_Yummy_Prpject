import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/chef.png";
export default function NavbarUP() {
  return (
    <div className="flex justify-between m-4">
      <div className="flex">
        <img src={logo} alt="logo" className="w-16" />
        <h1 className="text-3xl font-bold  text-center">Yummy</h1>
      </div>
      <div>
        <ul style={{ listStyle: "none" }} className="flex gap-4">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Favorite">Favorite</Link>
          </li>
          <li>
            <Link to="/Recipe">Recipe</Link>
          </li>
          <li>
            <Link to="/Contact">Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
