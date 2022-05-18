import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import style from "../style/form.module.css";

const RecipeForm = (props) => {
  const [data, setData] = useState({
    name: "",
    author: "",
    description: "",
    country_code: "",
    image: "",
    ingredient: [],
    instruction: "",
  });
  // countries state is for saving data from restcountries API
  const [countries, setCountries] = useState([]);

  // Getting data for all 250 countries
  useEffect(() => {
    axios.get("https://restcountries.com/v2/all").then((res) => {
      setCountries(res.data);
    });
  }, []);

  const changeCountry = (e) => {
    const correctCountry = countries.find((c) => c.name === e.target.value);
    setData({ ...data, country_code: correctCountry.alpha2Code });
  };

  return (
    <div className={style.formStyle}>
      <form onChange={props.change} onSubmit={props.submit}>
        <fieldset>
          <legend>
            <span className="number">1</span>Add new recipe
          </legend>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            required
            defaultValue={props.name}
          ></input>
          <label htmlFor="author">Author</label>
          <input
            type="text"
            name="author"
            id="author"
            required
            defaultValue={props.author}
          ></input>
          <label htmlFor="countryCode">Recipe is from:</label>
          {/* This is a way how you can dynamically create select options based on the array by using a simple mapping method.*/}
          <select name="countryCode" id="countryCode" onChange={changeCountry}>
            {countries.map((c) => (
              <option key={c.name}>{c.name}</option>
            ))}
          </select>
          <label htmlFor="description">Description</label>
          <textarea
            name="description"
            id="description"
            cols="30"
            rows="10"
          ></textarea>
          <label htmlFor="image">Image</label>
          <input
            type="text"
            name="name"
            id="image"
            required
            defaultValue={props.image}
          ></input>
        </fieldset>
        <fieldset>
          <legend>
            <span className="number">2</span> Ingredeint
          </legend>
          <label htmlFor="Quantity">Quantity</label>
          <input
            type="text"
            name="quantity"
            id="quantity"
            required
            defaultValue={props.quantity}
          ></input>
          <label htmlFor="Quantity">Ingredient</label>
          <input
            type="text"
            name="ingredient"
            id="ingredient"
            required
            defaultValue={props.ingredient}
          ></input>
          <button className="btn">add more</button>
          <label htmlFor="Instructions">Instructions</label>
          <textarea
            name="Instructions"
            id="Instructions"
            cols="30"
            rows="10"
          ></textarea>
        </fieldset>
        <input type="submit" value="Post recipe" />
      </form>
    </div>
  );
};

export default RecipeForm;
