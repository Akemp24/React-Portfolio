import React from 'react';
import Project from './Project';
import "../styles/Portfolio.css";
import Jakd from "../assets/images/Movie_app_landing_page.png";
import Venue from "../assets/images/travel-xp.png";
import Placeholder from "../assets/images/github screenshot.png";

function Portfolio() {
  return (
    <section id="My-work" className="content-section">
      <h2 className="portfolio-header">My Work</h2>
      <div className="project-list">
        <Project
          title="JAKD Movie App"
          imageSrc={Jakd}
          deployedLink="https://akemp24.github.io/Movie-app/"
          githubLink="https://github.com/Akemp24"
          className="project-image"
        />
        {/* Add more Project components for other projects */}
        <Project
          title="Venue App"
          imageSrc={Venue}
          deployedLink="https://enigmatic-tundra-58761-13359ac3882e.herokuapp.com/"
          githubLink="https://github.com/BrayMurph/JABIS"
          className="project-image"
        />
        <Project
          title="TBD"
          imageSrc={Placeholder}
          // deployedLink="https://your-deployed-link.com/project3"
          // githubLink="https://github.com/your-username/project3"
          className="project-image"
        />
      </div>
      <div className="github-link">
        <h2>Visit my GitHub profile</h2>
        <a href="https://github.com/Akemp24" target="_blank" rel="noopener noreferrer"className='project-link'>GitHub Profile</a>
      </div>
    </section>
  );
}

export default Portfolio;