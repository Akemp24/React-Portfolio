import React from 'react';
import Project from './Project'; // Import the Project component

function Portfolio() {
  return (
    <section id="My-work" className="content-section">
      <div className="left-section">
        <h2>My Work</h2>
      </div>
      <div className="right-section">
        <div className="top-images">
          <Project
            title="JAKD Movie App"
            imageSrc="./images/Movie_app_landing_page.png"
            deployedLink="https://akemp24.github.io/Movie-app/"
            githubLink="https://github.com/Akemp24"
          />
        </div>
        {/* Add more Project components for other projects */}
      </div>
    </section>
  );
}