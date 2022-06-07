import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import style from "../style/form.module.css";

const RecipeForm = () => {
  const [data, setData] = useState({
    name: "",
    author: "",
    description: "",
    country_code: "",
    image: "",
    ingredients: [],
    instruction: "",
  });

  // Ingredients as a separated state which contains one object by default. When adding new ingredients, the array will have more objects.
  const [ingredients, setIngredients] = useState([
    { id: 1, ingredientName: "", quantity: "" },
  ]);

  // countries state is for saving data from restcountries API
  const [countries, setCountries] = useState([]);

  // Getting data for all 250 countries
  useEffect(() => {
    axios.get("https://restcountries.com/v2/all").then((res) => {
      setCountries(res.data);
    });
  }, []);

  // basic onChange event for regular inputs
  const changeData = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  // Bit more complicated event handler for getting data from ingredients. First, we spread the current ingredients state and then look for that specific object in the array. We use the index, which is passed to the event handler. After updating the value in inputs, we will overwrite the Data state and add the ingredients array
  const changeIngredientData = (e, i) => {
    const { name, value } = e.target;
    const ingredientList = [...ingredients];
    ingredientList[i][name] = value;
    setIngredients(ingredientList);
    setData({ ...data, ingredients: ingredients });
  };

  // This event handler is reacting to our select event handler. We get the value from select, and then we find the correct alpha2Code. After that, we save valid code to the Data state.
  const changeCountry = (e) => {
    const correctCountry = countries.find((c) => c.name === e.target.value);
    setData({ ...data, country_code: correctCountry.alpha2Code });
  };

  // This event handler will add an empty ingredient object to the ingredients array.
  const addMore = (e) => {
    e.preventDefault();
    const newIngredients = {
      id: ingredients.length + 1,
      ingredientName: "",
      quantity: "",
    };
    setIngredients([...ingredients, newIngredients]);
  };
  // After we have all data collected from inputs, we post the Data object from state.
  const submitData = (e) => {
    e.preventDefault();
    axios.post("http://localhost:3010/recipes", data);
  };

  return (
    // Please note that you have to declare each input handler separately because we have three different kinds of input handlers. Otherwise, the latest handler will overwrite the previous ones.
    <div className={style.formStyle}>
      <form onSubmit={submitData}>
        <fieldset>
          <legend>
            <span className="number">1</span>Add new recipe
          </legend>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            onChange={changeData}
          ></input>
          <label htmlFor="author">Author</label>
          <input
            type="text"
            name="author"
            id="author"
            onChange={changeData}
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
            onChange={changeData}
          ></textarea>
          <label htmlFor="image">Image url</label>
          <input
            type="url"
            name="image"
            id="image"
            onChange={changeData}
          ></input>
        </fieldset>
        <fieldset>
          <legend>
            <span className="number">2</span> Ingredient
          </legend>
          {ingredients.map((_, i) => {
            return (
              <div key={i}>
                <div>
                  <label htmlFor="ingredientName">Ingredient</label>
                  <input
                    type="text"
                    name="ingredientName"
                    id="ingredientName"
                    onChange={(e) => changeIngredientData(e, i)}
                  />
                </div>
                <div>
                  <label htmlFor="quantity">Quantity</label>
                  <input
                    type="text"
                    name="quantity"
                    id="quantity"
                    onChange={(e) => changeIngredientData(e, i)}
                  />
                </div>
              </div>
            );
          })}
          <button className="btn" onClick={addMore}>
            add more
          </button>
          <label htmlFor="Instructions">Instructions</label>
          <textarea
            name="instructions"
            id="instructions"
            cols="30"
            rows="10"
            onChange={changeData}
          ></textarea>
        </fieldset>
        <input type="submit" value="Post recipe" />
      </form>
    </div>
  );
};

export default RecipeForm;
