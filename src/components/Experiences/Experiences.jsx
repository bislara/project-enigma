import React from 'react';
import { Link } from 'react-router-dom';
import FooterLink from '../FooterLink/FooterLink';
import Header from '../Header/Header';
import { workExperiences,pors } from '../../assets/experienceList';
import './Experience.css';
import ExperienceCard from './ExperienceCard';

const Projects = () => {
    return (
        <div className='section-container'>
            <Header
                heading='My Experiences.'
                details="Here are a few experiences gained, check them out!"
            />

            <h2 className="experience-type">Technical Experiences</h2>
            <div className='project-cards-container'>
                {workExperiences.map(
                    ({
                        role,
                        company,
                        companylogo,
                        date,
                        desc,
                        topic,
                    }) => {
                        return (
                            <ExperienceCard
                                role={role}
                                company={company}
                                companylogo={companylogo}
                                date={date}
                                desc={desc}
                                topic={topic}
                                tech={true}
                            />
                        );
                    }
                )}
            </div>
            
            <h2 className="experience-type">Position of Responsibilities</h2>
            <div className='project-cards-container'>
                {pors.map(
                    ({
                        role,
                        company,
                        companylogo,
                        date,
                        desc,
                    }) => {
                        return (
                            <ExperienceCard
                                role={role}
                                company={company}
                                companylogo={companylogo}
                                date={date}
                                desc={desc}
                                tech={false}
                            />
                        );
                    }
                )}
            </div>
            
            <FooterLink
                phrase='Check out '
                link='my projects!'
                toAdress='/projects'
            />
        </div>
    );
};

export default Projects;
