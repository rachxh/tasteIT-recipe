import React from "react";
import { Link } from "react-router-dom";
//import video from "../assets/videos/cooking.mp4";
import gif from "../assets/videos/cooking.gif";


const HeroBanner = () => {
  return (
    <div className="hero-banner">
      <div >
    {/* <video autoPlay muted loop className="video">
        <source src={video} type="video/mp4" />
      </video> */}
      <img src={gif} alt="cooking" className="video" />
      </div>
      <div className="hero-text">
        <h1>TasteIT</h1>
        <p>TasteIT is a recipe app</p>
        <button className="btn">
          <Link to="recipeList" className="btn-link">Browse recipes</Link>
          </button>
      </div>
    </div>
  );
};

export default HeroBanner;
