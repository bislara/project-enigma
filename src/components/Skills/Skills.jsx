import React, {Fragment} from 'react';
import FooterLink from '../FooterLink/FooterLink';
import Header from '../Header/Header';
import { skillList } from './../../assets/skillsData';
import './Skills.css';
import skillsVector from './../../assets/skills_vector.png';
import SkillCard from './SkillCard';

import DisplayLottie from './DisplayLottie'
import webdev from './../../assets/lottie/webdev.json';

const SkillBars = [
    {
      Stack: 'Frontend/Design', //Insert stack or technology you have experience in
      progressPercentage: '65', //Insert relative proficiency in percentage
    },
    {
      Stack: 'Backend',
      progressPercentage: '75',
    },
    {
      Stack: 'Programming',
      progressPercentage: '80',
    },
  ]


const Skills = () => {
    return (
        <div className='section-container'>
            <Header
                heading='My Skills.'
                details="Passionate about new technologies, I keep exploring stuff. Here's the tech stack I've worked with!"
            />

            <div className='skill-index'>    
                {skillList.map(({ skillName, skillUrl }) => (
                        <SkillCard skillName={skillName} skillUrl={skillUrl} />
                    ))}
            </div>

            <div className='skill-card-container'>

                <div className='skills-left'>
                        <DisplayLottie animationData={webdev} />                
                    </div>

                <div className='skills-right'>
                    
                    <h1 className="h1">Proficiency</h1>
                        {
                            SkillBars.map(skill => {
                                return <div className="wrapper">
                                <div className="progress-label">
                                    <span>{skill.Stack}</span>
                                    </div>
                                    
                                <div className="progress-bar">    
                                  <div className="bar" data-size={skill.progressPercentage}>
                                    <span className="perc"></span>
                                  </div>
                                </div>
                              </div>
                            })
                        }

                </div>

            </div>

            <FooterLink phrase='Check out my ' link='projects!' toAdress='/projects' />

            <div className='skills-vector-frame'>
                <img
                    src={skillsVector}
                    alt='skills'
                    className='skills-vector'
                />
            </div>
        </div>
    );
};

function loading() {
    document.querySelectorAll(".bar").forEach(function(current) {
      let startWidth = 0;
      const endWidth = current.dataset.size;
      console.log("width is: ",endWidth);
      
      /* 
      setInterval() time sholud be set as trasition time / 100. 
      In our case, 2 seconds / 100 = 20 milliseconds. 
      */
      const interval = setInterval(frame, 20);
      function frame() {
        if (startWidth >= endWidth) {
          clearInterval(interval);
        } else {
            startWidth++;
            current.style.width = `${endWidth}%`;
            current.firstElementChild.innerText = `${startWidth}%`;
          }
       }
    });
  }
  
  setTimeout(loading, 1000);


  
export default Skills;
