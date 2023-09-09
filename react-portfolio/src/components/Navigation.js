import React from 'react';
import { Link } from 'react-router-dom';
import "../styles/Navigation.css";

function Navigation() {
  return (
    <nav className="navbar">
      <Link to="/" className="nav-link">About Me</Link>
      <Link to="/portfolio" className="nav-link">Portfolio</Link>
      <Link to="/contact" className="nav-link">Contact Info</Link>
      {/* <Link to="/resume" className="nav-link">Resume</Link> */}
    </nav>
  );
}

export default Navigation;