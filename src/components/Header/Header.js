import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
const Header = () => {
  return (
    <div className="bg-black  py-6 mb-4">
      <nav className="text-xl ">
        <Link to="/home">Home</Link>
        <Link to="/orderreview">Review</Link>
        <Link to="/grandpa"> Grandpa</Link>
      </nav>
    </div>
  );
};

export default Header;
