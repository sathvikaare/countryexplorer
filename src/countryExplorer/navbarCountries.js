import React from "react";
import { NavLink } from "react-router-dom";
import './navbarCountries.css';

const CountriesNavBar = () => {
  return (
    <nav className="navbar">
      <div className="container-fluid">
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink to="/" className="nav-link">Home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/about" className="nav-link">About</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default CountriesNavBar;
