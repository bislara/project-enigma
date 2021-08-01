import React from 'react';
import './Projects.css';

const ProjectCard = ({
    projectName,
    projectDescription,
    videoUrl,
    projectUrl,
    skilsList
}) => {
    return (
        <div className='project-card'>
            {/* <div className='image-container'>
                <a href={projectUrl} className='project-external-link'>
                    <img
                        src={imageUrl}
                        alt='project'
                        className='project-image'
                    />
                </a>
            </div> */}

            <div className='project-details-container'>
                <h2 className='project-heading'><a href={projectUrl} className='project-external-link'>{projectName}</a></h2>
                <p className='project-details'>{projectDescription}</p>
                {/* <a href={videoUrl} className='project-yt-link'>
                    Watch More!
                </a> */}
                <div className="skill-container">
                {skilsList.map(function(skill){
                return <label className="skillBox">
                         {skill}
                       </label>;
                })}
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
