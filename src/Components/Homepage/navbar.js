import React from "react";
import "../style.css";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">
         
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto order-6 ">
            <li className="nav-item active">
              <a className="nav-link text-black" href="#" aria-current="page">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-black" href="#">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-black" href="#">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;