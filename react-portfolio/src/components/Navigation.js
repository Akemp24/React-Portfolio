import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import "../styles/Navigation.css";

function Navigation() {
  // Get the current location
  const location = useLocation(); 

  return (
    <nav className="navbar">
      <div className="nav-link">
        <Link to="/" className={`nav-item ${location.pathname === '/' ? 'active' : ''}`}>
          About Me
        </Link>
      </div>
      <div className="nav-link">
        <Link to="/portfolio" className={`nav-item ${location.pathname === '/portfolio' ? 'active' : ''}`}>
          Portfolio
        </Link>
      </div>
      <div className="nav-link">
        <Link to="/contact" className={`nav-item ${location.pathname === '/contact' ? 'active' : ''}`}>
          Contact Info
        </Link>
      </div>
      <div className="nav-link">
        <Link to="/resume" className={`nav-item ${location.pathname === '/resume' ? 'active' : ''}`}>
          Resume
        </Link>
      </div>
    </nav>
  );
}

export default Navigation;