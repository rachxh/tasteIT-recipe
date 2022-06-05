import React, { useEffect, useState } from "react";
import axios from "axios";
import RecipeCard from "./RecipeCard";

const RecipeList = () => {
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [countries, setCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  
  useEffect(() => {
    setIsLoading(true);
    axios
      .all([
        axios.get("http://localhost:3010/recipes"),
        axios.get("https://restcountries.com/v2/all"),
      ])
      .then(
        axios.spread((res1, res2) => {
          setRecipes(res1.data);
          setCountries(res2.data);
        })
      );
    setIsLoading(false);
  }, []);

  if (isLoading) {
    return <p>Loading</p>;
  }


  const updateSearch = (e) => {
    setSearch(e.target.value);
    console.log(search);
  };

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
          .filter((recipe) => recipe.name.toLowerCase().includes(search.toLowerCase()))
          .map((recipe) => (
            <RecipeCard
              key={recipe.id}
            
              country={countries.find(
                (country) => country.alpha2Code === recipe.country_code
              )}
        
              {...recipe}
            />
          ))}
      </div>
    </div>
  );
};

export default RecipeList;
