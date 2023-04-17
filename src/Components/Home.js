import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>This is home page</h1>
      <Link to="/form">Go to form Pag</Link>
    </div>
  );
};

export default Home;
