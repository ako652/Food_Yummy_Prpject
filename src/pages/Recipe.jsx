import React, { useEffect, useState } from "react";
import CardImage from "../components/CardImage";
import { TextField } from "@mui/material";

export default function Recipe() {
  const url = "https://www.themealdb.com/api/json/v1/1/search.php?s=";
  const [Meals, setMeals] = useState([]);
  const [loading, setLoading]=useState(true)


  useEffect(()=>{
    fetch(url)
    .then((response)=>response.json()
    .then((data)=>{
     setLoading(false)
     setMeals(data.meals)
      
    }))
  },[])
  
  
  return (
    <div>
      <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      <div>
        {loading ? (
          <p>loading...</p>
        ) : (
          <div className="grid grid-cols-4 ">
            {Meals ? (
              Meals.map((meal) => {
                return <CardImage meal={meal} key={meal.idMeal} />;
              })
            ) : (
              <div>no data</div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}







