import React from 'react';
import Project from './Project';
import "../styles/Portfolio.css";
import Jakd from "../assets/images/Movie_app_landing_page.png";
import Venue from "../assets/images/travel-xp.png";
// import Placeholder from "../assets/images/github screenshot.png";
import Horiseon from "../assets/images/Horiseon-Challenge-Screenshot.png";
import PWGen from "../assets/images/pw-generator.png";
import Wdp from "../assets/images/Workday Planner.png";
import Quiz from "../assets/images/akemp24.github.io_Timed-quiz_.png";

function Portfolio() {
  return (
    <section id="My-work" className="content-section">
      <h2 className="portfolio-header">My Work</h2>
      <div className="project-list">
        <Project
          title="JAKD Movie App"
          imageSrc={Jakd}
          deployedLink="https://akemp24.github.io/Movie-app/"
          githubLink="https://github.com/Akemp24/Movie-app"
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
          title="Code Refractor Challenge"
          imageSrc={Horiseon}
          deployedLink="https://akemp24.github.io/Code-refractor-challenge/"
          githubLink="https://github.com/Akemp24/Code-refractor-challenge"
          className="project-image"
        />
        <Project
          title="Password Generator"
          imageSrc={PWGen}
          deployedLink="https://akemp24.github.io/Password-Generator/"
          githubLink="https://github.com/Akemp24/Password-Generator"
          className="project-image"
        />
        <Project
          title="Work Day Planner"
          imageSrc={Wdp}
          deployedLink="https://akemp24.github.io/Work-day-planner/Develop/index.html"
          githubLink="https://github.com/Akemp24/Work-day-planner"
          className="project-image"
        />
        <Project
          title="Timed Quiz"
          imageSrc={Quiz}
          deployedLink="https://akemp24.github.io/Timed-quiz/"
          githubLink="https://github.com/Akemp24/Timed-quiz"
          className="project-image"
        />
      </div>
    </section>
  );
}

export default Portfolio;