import React from 'react';
import "../styles/Footer.css";
import { FaGithub, FaLinkedin } from 'react-icons/fa'; // Import icons

function Footer() {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-links">
          <div className="icon-container">
            <a
              href="https://github.com/Akemp24"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
            >
              <FaGithub /> GitHub
            </a>
          </div>
          <div className="icon-container">
            <a
              href="https://www.linkedin.com/in/asia-kemp-49a2041b2/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
            >
              <FaLinkedin /> LinkedIn
            </a>
          </div>
        </div>
        <div className="footer-text">
          <p>&copy; {new Date().getFullYear()} Asia Kemp. All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;