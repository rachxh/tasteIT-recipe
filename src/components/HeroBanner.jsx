import React from "react";
import video from "../assets/videos/cooking.mp4";

const HeroBanner = () => {
  return (
    <div className="hero-banner">
      <video autoPlay muted loop className="video">
        <source src={video} type="video/mp4" />
      </video>
      <div className="hero-text">
        <h1>TaskeIT</h1>
        <p>TasteIT is a recipe app</p>
        <button className="btn">Browse recipes</button>
      </div>
    </div>
  );
};

export default HeroBanner;
