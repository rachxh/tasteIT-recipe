import React, { useState, useEffect } from "react";
import axios from "axios";

const RecipeSingle = () => {
  const [item, setItem] = useState({});

  useEffect((match) => {
    axios.get(`http://localhost:3010/recipes/id=${match.id}`).then((res) => {
      setItem(res.data);
      console.log(item);
    });
  }, []);

  return (
    <div>
      <h1>{item.name}</h1>
      <p>{item.description} </p>

      <img src={item.image} alt="" />

      {/* <ol>
        {props.ingredients.map((ingredient) => (
          <li>{ingredient}</li>
        ))}
      </ol> */}
    </div>
  );
};

export default RecipeSingle;
