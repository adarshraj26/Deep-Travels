import React, { useState } from "react";
import "../style.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <div className="navbar-div">
      <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#"></a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
          // onClick={() => setNavbarOpen((prev) => !prev)}
        >
          <span className="navbar-toggler-icon"></span>
          {/* {navbarOpen ? "close" : "open"} */}
        </button>

        <div className="collapse navbar-collapse " id="navbarNavDropdown" >
          <ul className= "navbar-nav ms-auto order-6 ">
            <li className="nav-item active">
              <Link to="/" className="nav-link text-black" aria-current="page">Home</Link>
            </li>
            <li className="nav-item">
              <a className="nav-link text-black" href="#">
                About
              </a>
            </li>
            <li className="nav-item">
              <Link to="/Contact" className="nav-link text-black" >Contact</Link>          
            </li>
            <li className="nav-item">
              <Link to="/add-car-details" className="nav-link text-black" >Admin</Link>          
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
