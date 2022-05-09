import React from "react";
// import { Link } from "react-router-dom";

const Main = () => {
  return (
    <main>
      <h2>Looking for the recipes?</h2>
      <div className="card-list">
        <div className="home-card">
          <h4>Lorem, ipsum dolor.</h4>
          <p>Lorem ipsum dolor sit amet.</p>
          {/* <Link to="/recipelist">All recipes</Link> */}
        </div>
        <div className="home-card">
          <h4>Lorem, ipsum dolor.</h4>
          <p>Lorem ipsum dolor sit amet.</p>
          {/* <Link to="/addrecipe">Add recipes</Link> */}
        </div>
        <div className="home-card">
          <h4>Lorem, ipsum dolor.</h4>
          <p>Lorem ipsum dolor sit amet.</p>
          {/* <Link to="https://bc.fi">Business College Helsinki homepage</Link> */}
        </div>
      </div>
    </main>
  );
};

export default Main;
