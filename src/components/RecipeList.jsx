import React, { useEffect, useState } from "react";
import axios from "axios";
import RecipeCard from "./RecipeCard";

const RecipeList = () => {
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3010/recipes")
      .then((res) => setRecipes(res.data));
  }, [query]);

  console.log(recipes);

  const updateSearch = (e) => {
    setSearch(e.target.value);
    // console.log(search);
  };
  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };

  return (
    <div className="recipe-page">
      <form onSubmit={getSearch} className="search-form">
        <input
          type="text"
          className="search-bar"
          value={search}
          placeholder="Search for recipe"
          onChange={updateSearch}
        />
        <button type="submit" className="search-btn">
          Search
        </button>
      </form>
      <div className="recipe-list">
        {recipes.map((recipe) => (
          <RecipeCard
            key={recipe.id}
            image={recipe.image}
            name={recipe.name}
            description={recipe.description}
          />
        ))}
      </div>
    </div>
  );
};

export default RecipeList;
