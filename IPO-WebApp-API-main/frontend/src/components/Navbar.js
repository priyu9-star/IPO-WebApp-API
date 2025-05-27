import React, { useState } from "react";
import "../styles/Navbar.css";
import logo from "../assets/logowithoutname.png";
import { useNavigate } from "react-router";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <div className="logo">
          <img src ={ logo} alt="Bluestock Logo" />
          <span>BLUESTOCK</span>
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className="menu-icon" onClick={() => setIsOpen(!isOpen)}>
          ☰
        </div>

        {/* Navigation Links - Only show on desktop or when isOpen is true */}
        <ul className={`nav-links ${isOpen ? "active" : ""}`}>
          <li className="nav-list"><a href="#">IPO</a></li>
          <li className="nav-list"><a href="#">COMMUNITY</a></li>
          <li className="nav-list"><a href="#">PRODUCTS</a></li>
          <li className="nav-list"><a href="#">BROKERS</a></li>
          <li className="nav-list"><a href="#">LIVE NEWS <span className="new-badge">NEW</span></a></li>
          <li className="auth-buttons">
            <button className="sign-in" onClick = {() => navigate('/signin')} >Sign In</button>
            <button className="sign-up" onClick = {() => navigate('/signup')} >Sign Up Now</button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
