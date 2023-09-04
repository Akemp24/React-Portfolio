import React from 'react';
import PropTypes from 'prop-types';

function Project ({ title, imageSrc, deployedLink, githubLink}) {
    return (
        <div className='project'>
            <h1 className='project-header'>{title}</h1>
            <a href={deployedLink} target='_blank' rel='noopener noreferrer'>
                <img src={imageSrc} alt={title}/>
            </a>
            <a href={githubLink} target='_blank' rel='noopener noreferrer'>
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