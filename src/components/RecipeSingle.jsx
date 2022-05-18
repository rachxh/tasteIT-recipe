import React, { useState, useEffect } from "react";

import axios from "axios";

const RecipeSingle = ({ match }) => {
  const [item, setItem] = useState({});

  // const Id = match.id;
  // console.log(match);

  useEffect(() => {
    axios.get(`http://localhost:3010/recipes/${match.id}`).then((res) => {
      setItem(res.data);
      // console.log(item);
    });
    console.log(match);
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
