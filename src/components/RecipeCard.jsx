import React from "react";
import { Link } from "react-router-dom";
import style from "../style/recipe.module.css";

const RecipeCard = (props) => {
  return (
    <div className={style.recipeCard}>
      <img className="food-img" src={props.image} alt={props.name}/>
      <img src={props.country.flag} alt="" className="flag" />
      <h3 className="food-name">
        {props.name}
      </h3>
      <button className="btn btn-more">
        {" "}
        <Link to={`/recipeSingle/${props.id}`} className="see-more">
        See more</Link>
      </button>
    </div>
  );
};

export default RecipeCard;

