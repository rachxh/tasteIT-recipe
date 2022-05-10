import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Main from "./components/Main";
import RecipeForm from "./components/RecipeForm";
import RecipeList from "./components/RecipeList";
import LandingPage from "./pages/LandingPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />}>
          <Route index element={<Main />} />
          <Route path="recipeList" element={<RecipeList />} />
          <Route path="recipeForm" element={<RecipeForm />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
