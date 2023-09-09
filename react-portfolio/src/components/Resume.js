import React from 'react';

const Resume = () => {
  const resumeUrl = 'https://docs.google.com/document/d/1xvg3_iBbFLpcWJOdG5VloZHsBXIa5u49WZVhjwzgW9U/edit?usp=sharing';
  return (
    <div>
      <h2>Resume</h2>
      <iframe
        src={resumeUrl}
        width="100%"
        height="500px"
        title="Resume"
      ></iframe>
    </div>
  );
};

export default Resume;