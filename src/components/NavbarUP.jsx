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
          <li className="border border-slate-300 rounded-md hover:border-indigo-300 hover:bg-indigo-500 p-2">
            <Link to="/">Home</Link>
          </li>
          <li className="border border-slate-300 rounded-md hover:border-indigo-300 hover:bg-indigo-500 p-2">
            <Link to="/Favorite">
              <Badge badgeContent={number}>Favorite</Badge>
            </Link>
          </li>
          <li className="border border-slate-300 rounded-md hover:border-indigo-300 hover:bg-indigo-500 p-2">
            <Link to="/Recipe">Recipe</Link>
          </li>
          <li className="border border-slate-300 rounded-md hover:border-indigo-300 hover:bg-indigo-500 p-2">
            <Link to="/Contact">Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
