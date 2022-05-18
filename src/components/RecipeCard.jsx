import React from "react";
import { Link } from "react-router-dom";
import style from "../style/recipe.module.css";

const RecipeCard = (props) => {
  return (
    <div className={style.recipeCard}>
      <img src={props.image} alt="" />
      <h2>
        <Link to={`/recipeSingle/${props.id}`}>{props.name}</Link>
      </h2>
      <p>{props.description}</p>
      <button className="btn btn-more">
        {" "}
        <Link to={`/recipeSingle/${props.id}`} />
        See more
      </button>
    </div>
  );
};

export default RecipeCard;
