import React, { useEffect, useState } from "react";
import axios from "axios";
import RecipeCard from "./RecipeCard";

const RecipeList = () => {
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3010/recipes")
      .then((res) => setRecipes(res.data));
  }, []);

  useEffect(() => {
    axios
      .get("https://restcountries.com/v2/all")
      .then((res) => setCountries(res.data));
  }, []);

  console.log(recipes);

  const updateSearch = (e) => {
    setSearch(e.target.value);
    console.log(search);
  };

  console.log(recipes);
  return (
    <div className="recipe-page">
      <form className="search-form">
        <input
          type="text"
          className="search-bar"
          value={search}
          placeholder="Search for recipe"
          onChange={updateSearch}
        />
      </form>
      <div className="recipe-list">
        {recipes
          .filter((recipe) => recipe.name.includes(search))
          .map((recipe) => (
            <RecipeCard
              key={recipe.id}
              // image={recipe.image}
              // name={recipe.name}
              // description={recipe.description}
              {...recipe}
            />
          ))}
      </div>
    </div>
  );
};

export default RecipeList;
