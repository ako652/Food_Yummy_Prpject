import React from "react";
import pizza from "../assets/pizza.webp";
import salad from "../assets/garden-salad.jpg";
import shrimp from "../assets/shrimp2.webp";
import cakes from "../assets/cakes.jpg";
import chicken from "../assets/chickenfr.jpg";

export default function Home() {
  return (
    <div>
      <div className="w-full h-96 BackgdImage ">
        <div className="w-full h-full grid content-center">
          <p>healthy delicious recipes</p>
        </div>
      </div>

      <div>
        <div className="m-20">
          <h1>popular food</h1>
          <p>
            we provides a variety of food and breavery recipes with high taste
            from chefs
          </p>
        </div>

        <div className="flex justify-center content-center gap-10 m-20">
          <img src={cakes} alt="cakes" className="w-32 rounded-full" />
          <img src={shrimp} alt="shrimp" className="w-32 rounded-full" />
          <img src={pizza} alt="pizza" className="w-32 rounded-full" />
          <img src={salad} alt="salad" className="w-32 rounded-full" />
          <img src={chicken} alt="chicken" className="w-32 rounded-full" />
        </div>
      </div>
    </div>
  );
}
