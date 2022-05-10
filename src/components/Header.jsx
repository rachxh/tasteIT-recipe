import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <h3 className="logo">TasteIT 🧑‍🍳</h3>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/recipeList">Recipes</Link>
          </li>
          <li>
            <Link to="/recipeForm">Add new recipe</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
