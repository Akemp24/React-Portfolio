import React from 'react';
import PropTypes from 'prop-types';
import "../styles/Project.css";

function Project ({ title, imageSrc, deployedLink, githubLink}) {
    return (
        <div className='project'>
            <h1 className='project-header'>{title}</h1>
            <a href={deployedLink} target='_blank' rel='noopener noreferrer' className='project-link'>
                <img src={imageSrc} alt={title}j className='project-image'/>
            </a>
            <a href={githubLink} target='_blank' rel='noopener noreferrer' className='project-link'>
                <h2 className='project-github'>Link to Github Repository</h2>
            </a>
        </div>
    );
}

Project.propTypes = {
    title: PropTypes.string.isRequired,
    imgSrc: PropTypes.string.isRequired,
    deployedLink: PropTypes.string.isRequired,
    githubLink: PropTypes.string.isRequired,
};

export default Project;