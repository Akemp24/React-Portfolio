import React from 'react';

function Portfolio() {
  return (
    <section id="My-work" className="content-section">
      <div className="left-section">
        <h2>My Work</h2>
      </div>
      <div className="right-section">
        {/* Your project components go here */}
        {/* Example: */}
        <div className="top-images">
          <h1 className="project-header">JAKD Movie App</h1>
          <a href="https://akemp24.github.io/Movie-app/">
            <img src="./images/Movie_app_landing_page.png" alt="JAKD Movie App" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;