import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "./Header";

import axios from "axios";

const RecipeSingle = () => {
  const [recipe, setRecipe] = useState(null);
  const [flag, setFlag] = useState(null);
  let params = useParams();

  useEffect(() => {
      axios.get(`http://localhost:3010/recipes/${params.id}`)
      .then((res1) => {
          setRecipe(res1.data);

          axios.get("https://restcountries.com/v2/all?fields=flag,alpha2Code")
          .then((res2) => {
            setFlag(
              res2.data.find(
                (country) => country.alpha2Code === res1.data.country_code
              ).flag
            );
          })
        })
  }, [params]);

  if (!recipe) {
    return (
      <>
        <Header />
        <p>Loading ...</p>
      </>
    );
  } else {
    return (
      <div className="rs-container">
        <div className="img-container">
        <img className="food-img-bg" src={recipe.image} alt={recipe.name} />
        <img id="flag-pic" src={flag} alt="" className="flag" />
        </div>
        <div className="rs-detail">
          <h1 className="title">{recipe.name}</h1>
          <h3>Author:</h3>
          <p className="food-detail">{recipe.author}</p>
          <h3>Description: </h3>
          <p className="food-detail">{recipe.description}</p>  
       
        <h3>Instruction:</h3>
        <p className="food-detail">{recipe.instructions}</p>
        <div>
        <h3 className="inc-title">Ingredient: </h3>
          {recipe.ingredients.map((ingredient, index) => {
            return (
              <div key={index} className="ingredient">
              
                <div className="row-title">{ingredient.ingredientName}</div>
                <div className="row-content">{ingredient.quantity}</div>
                
              </div>
            );
          })}
        </div>
        </div>
      </div>
    );
  }
};

export default RecipeSingle;
