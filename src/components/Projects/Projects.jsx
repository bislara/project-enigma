import React from 'react';
import { Link } from 'react-router-dom';
import FooterLink from '../FooterLink/FooterLink';
import Header from '../Header/Header';
import { projectsData } from './../../assets/projectsData';
import ProjectCard from './ProjectCard';
import './Projects.css';

const Projects = () => {
    return (
        <div className='section-container'>
            <Header
                heading='My Projects.'
                details="Here are a few cool things I've worked on, do check them out!"
            />

            <div className='project-cards-container'>
                {projectsData.map(
                    ({
                        projectName,
                        projectDescription,
                        imageUrl,
                        videoUrl,
                        projectUrl,
                        skilsList,
                    }) => {
                        return (
                            <ProjectCard
                                projectName={projectName}
                                projectDescription={projectDescription}
                                projectUrl={projectUrl}
                                imageUrl={imageUrl}
                                videoUrl={videoUrl}
                                skilsList = {skilsList}
                            />
                        );
                    }
                )}
            </div>

            <div className='head-btns'>
                <Link to={{  pathname: 'https://github.com/bislara' }} target="_blank" className='btn btn-white'>
                    <p className='btn-text'>More Projects</p>
                </Link>
            </div>
            <br></br>

            <FooterLink
                phrase='Check out '
                link='my skills!'
                toAdress='/skills'
            />
        </div>
    );
};

export default Projects;
