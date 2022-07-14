import React from "react";
import "./navbar.css";

const Navbar = () => {
  return (
    <nav>
      <div className="nav-div">
        <h1 className="logo">
          <img id="logo" src={require("../../images/college.jpg")} alt="" />
          Govt science college, Tejgaon
        </h1>
      </div>
    </nav>
  );
};

export default Navbar;
