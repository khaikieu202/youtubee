import React from "react";

import "./App.css";
import Menu from "./components/menu";
import NavBar from "./components/navbar";

const App = () => {
  return (
    <div className="container">
      {/* menu  */}
      <Menu />

      {/* main content  */}
      <div className="main">
        <NavBar />

        <div className="wrapper">video cards</div>
      </div>
    </div>
  );
};

export default App;
