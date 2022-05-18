import React from "react";
import HeroBanner from "./HeroBanner";
import { Link } from "react-router-dom";

const Main = () => {
  const linkStyle = {
    color: "white",
  };
  return (
    <>
      <HeroBanner />
      <main>
        <h2 className="main-title">Looking for the recipes?</h2>
        <div className="card-list">
          <div className="home-card">
            <h4>Browse recipes</h4>
            <p>
              Find your favorites in this collection. You can search recipes
              baes on name or country
            </p>
            <span>
              <Link to="/recipeList" style={linkStyle}>
                All recipes
              </Link>
            </span>
          </div>
          <div className="home-card">
            <h4>
              <b>Add recipes</b>
            </h4>
            <p>Recipes form your country is missing? No worries, add one!</p>
            <span>
              <Link to="/recipeForm" style={linkStyle}>
                Add recipes
              </Link>
            </span>
          </div>
          <div className="home-card">
            <h4>Want to know more about our projects?</h4>
            <p>Visit out program homepage</p>
            <span>
              <a href="https://bc.fi" target="_blank" style={linkStyle}>
                Business College Helsinki
              </a>
            </span>
          </div>
        </div>
      </main>
    </>
  );
};

export default Main;
