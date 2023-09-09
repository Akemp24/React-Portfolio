import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/" className="nav-link">About Me</Link>
        </li>
        <li className="nav-item">
          <Link to="/portfolio" className="nav-link">Portfolio</Link>
        </li>
        <li className="nav-item">
          <Link to="/contact" className="nav-link">Contact Info</Link>
        </li>
        <li className="nav-item">
          <Link to="/resume" className="nav-link">Resume</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;