import React from "react";
import myImage from "../assets/images/About-me.jpg";
import "../styles/AboutMe.css";

function AboutMe() {
    return (
      <section id="About-Me">
        <div className="small-image-container">
          <img src={myImage} alt="About Me" className="small-image" />
        </div>
        <div className="content-section">
          <div className="left-section">
            <h2>About Me</h2>
          </div>
          <div className="right-section">
            <p>
            I am a graduate of Western Carolina University Class of 2019.
                    I received my degree in Forensic Science with a concentration in Chemistry however, after working in the field for a couple of years I decided I wanted a new Path.
                    I am currently in a Full Stack Development Program set to end in October of 2023. 
                    So far the skills we have learned are HTML, and CSS but, I am excited to see where the rest of this course takes me.
            </p>
          </div>
        </div>
      </section>
    );
  }

  export default AboutMe;