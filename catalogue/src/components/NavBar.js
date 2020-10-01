import React, { useEffect } from "react";

const NavBar = () => {
  useEffect(() => {
    //refCount.current += 1;
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  });
  return (
    <div className="topnav" id="myTopnav">
      <a href="#home" className="active">
        Home
      </a>
      <a href="#news">About</a>
      <div className="dropdown">
        <button className="dropbtn">
          Catalogue
          <i className="fa fa-caret-down"></i>
        </button>
        <div className="dropdown-content">
          <a href="#">Link 1</a>
          <a href="#">Link 2</a>
          <a href="#">Link 3</a>
        </div>
      </div>
      <a href="#contact">Contact</a>
    </div>
  );
};

export default NavBar;
