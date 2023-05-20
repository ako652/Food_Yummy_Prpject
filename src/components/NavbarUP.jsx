import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/chef.png";
import Badge from "@mui/material/Badge";
export default function NavbarUP({number}) {
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
            <Link to="/Favorite">
              
              <Badge badgeContent={number}  >
               Favorite
              </Badge>
            </Link>
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
