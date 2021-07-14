import React from 'react';
import FooterLink from '../FooterLink/FooterLink';
import Header from '../Header/Header';
import aboutVector from './../../assets/about_vector.png';
import './About.css';
import aboutAnime from './../../assets/about_anime.gif';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div className='section-container'>
            <Header className='header-section'
                heading='About Me.'
                details="I am a final year under graduate student in Electronics and Communication Department of NIT Rourkela, who is interested and fascinated about the new era's technology"
            />

            <div className='about-main'>
                <div className='about-main-left'>
                    {/* Sub section 1 */}
                    <h3 className='about-sub-head'>Education</h3>
                    <p className='about-details'>
                        
                        <ul>
                            <li className='education-list'>
                            <b>Bachelor Degree (July 2017 - May 2021)<br/>
                            @ National institute of Technology, Rourkela </b> <br/>
                            <p>
                            On going under graduate degree in Electronics and Communication Engineering with an overall CGPA of 8.72 out of 10. </p>                           
                            </li>
                            
                            <li className='education-list'>
                            <b>Intermediate Degree (May 2015 - April 2017)<br/>
                            @ DAV Public School, CDA, Cuttack </b> <br/>
                            <p>
                            Completed my intermediate degree in Science stream in CBSE Board with an overall percentage of 89% out of 100%. </p>                           
                            </li>

                            <li className='education-list'>
                            <b>High School<br/>
                            @ DAV Public School, CDA, Cuttack </b> <br/>
                            <p>
                            Completed my 10th class in CBSE Board with an overall CGPA of 10 out of 10. </p>                           
                            </li>

                        </ul>
                        <div className='head-btns'>
                        <Link  to={{  pathname: 'https://drive.google.com/file/d/11eRbC0HSrf12cRvq3mrmFK2R73t3buO3/view?usp=sharing' }} target="_blank" className='btn btn-white'>
                            <p className='btn-text'>Download CV</p>
                        </Link>
                        </div>    
                    </p>

                    {/* Sub section 2 */}

                    
                </div>

                <div className='about-main-right'>
                    <img
                        src={aboutAnime}
                        alt='animation'
                        className='about-anime'
                    />
                </div>
                
            </div>
            <div className="row about-center">
                    <h3 className='about-sub-head'>GitHub Contributions</h3>
                    <br />

                    <img style={{maxWidth: '100%',height: 'auto'}} src="https://grass-graph.moshimo.works/images/bislara.png" />

                    <p>
                    Summary of contributions made by
                    <a href="https://www.github.com/bislara" target="_blank">@bislara</a>
                    </p>
                </div>

            <FooterLink
                phrase='Check out my '
                link='skills!'
                toAdress='/skills'
            />
            {/* Vector Frame! */}
            <div className='vector-frame'>
                <img src={aboutVector} className='about-vector' alt='about' />
            </div>
        </div>
    );
};

export default About;
