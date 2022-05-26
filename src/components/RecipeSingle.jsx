import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import axios from "axios";

const RecipeSingle = () => {
  const [item, setItem] = useState({});
  let params = useParams();
  // const Id = match.id;
  // console.log(match);

  useEffect(() => {
    axios.get(`http://localhost:3010/recipes/${params.id}`).then((res) => {
      setItem(res.data);
      // console.log(item);
    });
    console.log(params);
  }, [params]);

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
