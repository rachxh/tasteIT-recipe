import React from "react";
import Header from "./components/Header";

import Main from "./components/Main";
import Footer from "./components/Footer";
import HeroBanner from "./components/HeroBanner";

const App = () => {
  return (
    <>
      <Header />
      <HeroBanner />
      <Main />
      <Footer />
    </>
  );
};

export default App;
