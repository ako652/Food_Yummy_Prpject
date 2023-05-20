import React from "react";
import CardImage from "../components/CardImage";
import { TextField, Alert,AlertTitle } from "@mui/material";

export default function Recipe({  handleFavoriteClick, favorites,userInput, handleSearch ,filter }) {
  return (
    <div>
      <h1 className="text-3xl font-bold m-4">Recipe List</h1>
      <TextField
        id="outlined-basic"
        label="search your recipe"
        variant="outlined"
        value={userInput}
        onChange={handleSearch}
      />
      <div>
        {filter.length === 0 ? (
          <Alert severity="info" className="flex justify-center ">
            <AlertTitle>Info</AlertTitle>
            Sorry we have not got this recipe yet !
            <strong>check it out later!</strong>
          </Alert>
        ) : (
          <div className="grid grid-cols-4 gap-4">
            {filter.map((recipe) => (
              <CardImage
                recipe={recipe}
                key={recipe.idMeal}
                handleFavoriteClick={handleFavoriteClick}
                favorites={favorites}
                filter={filter}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
