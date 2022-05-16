import axios from "axios";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Main from "./components/Main";
import RecipeForm from "./components/RecipeForm";
import RecipeList from "./components/RecipeList";
import RecipeSingle from "./components/RecipeSingle";
import Layout from "./pages/Layout";

const App = () => {
  // submitHandler = (e) => {
  //   e.prevent.default();
  //   const name={
  //     name: this.state.name
  //   }
  //   axios.post(`http://localhost:3010/recipes`,{name})
  //   .then(res=>console.log(res);
  //   .catch(err)=>console.log(error);
  // };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Main />} />
          <Route path="recipeList" element={<RecipeList />} />
          <Route path="recipeForm" element={<RecipeForm />} />
          <Route path="recipeSingle/:id" element={<RecipeSingle />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
