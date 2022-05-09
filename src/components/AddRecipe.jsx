import React from "react";

const AddRecipe = (props) => {
  return (
    <form>
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
      <label htmlFor="from">Recipe is from:</label>
      <select name="from" id="from">
        <option value=""></option>
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
      <p>Ingredients</p>
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
      <button>add more</button>
      <label htmlFor="Instructions">Instructions</label>
      <textarea
        name="Instructions"
        id="Instructions"
        cols="30"
        rows="10"
      ></textarea>
      <input type="submit" value="Post recipe" />
    </form>
  );
};

export default AddRecipe;
