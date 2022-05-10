import React, { Component, useEffect, useState } from "react";
import axios from "axios";

const RecipeList = () => {
  const [recipe, setRecipe] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3010/recipes")
      .then((res) => setRecipe(res.data));
  }, []);
  console.log(recipe);
  return <div></div>;
};

export default RecipeList;
