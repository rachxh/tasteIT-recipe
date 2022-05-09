import React from "react";
// import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <h3 className="logo">TasteIT 🧑‍🍳</h3>
      <nav>
        <ul>
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">Recipe</a>
          </li>
          <li>
            <a href="">Add new recipe</a>
          </li>
          {/* <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/recipelist">Recipes</Link>
          </li>
          <li>
            <Link to="/addrecipe">Add new recipe</Link>
          </li> */}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
