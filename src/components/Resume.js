import React from 'react';
import "../styles/Resume.css";

function Resume() {
  return (
    <div className="resume-container">
      <h2 className="resume-heading">My Resume</h2>
      <p>Download my resume:</p>
      <a href="https://docs.google.com/document/d/e/2PACX-1vQKK4HFevqIkk9Pf3CYXh16TaLKGgUs8Vg0X4SMK6u7d2k6g_9UHjpwKiGz4fztCwWa7l_YJB2CIzAm/pub"
       download="https://docs.google.com/document/d/e/2PACX-1vQKK4HFevqIkk9Pf3CYXh16TaLKGgUs8Vg0X4SMK6u7d2k6g_9UHjpwKiGz4fztCwWa7l_YJB2CIzAm/pub" className='resume-link'>
        Download Resume
      </a>

      <h2 className="proficiencies-heading">Developer Proficiencies</h2>
      <ul className="proficiencies-list">
        <li>JavaScript</li>
        <li>React.js</li>
        <li>HTML</li>
        <li>CSS</li>
        <li>Node.js</li>
        <li>Express.js</li>
        <li>SQL</li>
        <li>MongoDB</li>
        <li>NoSQL</li>
        <li>GraphQL</li>
        <li>jQuery</li>
        <li>Bootstrap</li>
        <li>Git</li>
        <li>GitHub</li>
        <li>Heroku</li>
        <li>MERN Stack</li>
        <li>RESTful APIs</li>
        <li>Progressive Web Applications (PWAs)</li>
        <li>Object Oriented Programming (OOP)</li>
        <li>Test Driven Development (TDD)</li>
        <li>Model View Controller (MVC)</li>
        <li>Agile Methodologies</li>
        <li>Responsive Design</li>
      </ul>
    </div>
  );
}

export default Resume;