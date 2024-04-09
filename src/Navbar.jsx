// Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light shadow p-3 mb-5 bg-body-tertiary rounded sticky-top">
      <div className="container-fluid">
        <Link className="navbar-brand  fs-2 text-primary" to="/">
          Fastxmarketing
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item text-info">
              <Link className="nav-link  font-weight-bold fs-5" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link   font-weight-bold fs-5" to="/about">
                AboutUs
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link  font-weight-bold fs-5" to="/services">
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link font-weight-bold fs-5" to="/contact">
                ContactUs
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
