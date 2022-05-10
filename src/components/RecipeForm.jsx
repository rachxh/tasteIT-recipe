import React from "react";

const RecipeForm = (props) => {
  return (
    <div className="form-style">
      <form>
        <fieldset>
          <legend>
            <span class="number">1</span>Add new recipe
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
        </fieldset>
        <fieldset>
          <legend>
            <span class="number">2</span> Ingredeint
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
