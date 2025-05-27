import React from "react";
import "../styles/Topbar.css";
import { FaSearch } from "react-icons/fa";

const Topbar = () => {
  return (
    <header className="header">
        <div className="search-container">
            <input type="text" placeholder="Search" className="search-bar" />
            <span ><FaSearch className="search-icon"/></span> 
        </div>
    </header>
  );
};

export default Topbar;
