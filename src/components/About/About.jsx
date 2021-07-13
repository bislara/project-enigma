import React from 'react';
import FooterLink from '../FooterLink/FooterLink';
import Header from '../Header/Header';
import aboutVector from './../../assets/about_vector.png';
import './About.css';
import aboutAnime from './../../assets/about_anime.gif';

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
                    <h3 className='about-sub-head'>Teacher</h3>
                    <p className='about-details'>
                        Teaching is my passion, till now, I've taught thousands
                        of students about Programming and Web Development. Check
                        out{' '}
                        <a
                            className='about-link-element'
                            href='http://theleanprogrammer.com/aam'
                        >
                            my free react courses!
                        </a>
                    </p>

                    {/* Sub section 2 */}
                    <h3 className='about-sub-head'>Blogger</h3>
                    <p className='about-details'>
                        I've been writing blogs from around 3 years now, and
                        became top-blogger on medium twice. Check out{' '}
                        <a
                            className='about-link-element'
                            href='https://madhavbahl.medium.com/'
                        >
                            my medium blogs today!
                        </a>
                    </p>

                    {/* Sub section 3 */}
                    <h3 className='about-sub-head'>Public Speaker</h3>
                    <p className='about-details'>
                        Being a passionate public speaker, I've given talks at
                        more than 75 events till now! Want me to speak in your
                        event?{' '}
                        <a
                            className='about-link-element'
                            href='mailto:info@theleanprogrammer.com'
                        >
                            Email me the details!
                        </a>
                    </p>
                </div>

                <div className='about-main-right'>
                    <img
                        src={aboutAnime}
                        alt='animation'
                        className='about-anime'
                    />
                </div>
            </div>

            <FooterLink
                phrase='Check out my '
                link='projects!'
                toAdress='/projects'
            />
            {/* Vector Frame! */}
            <div className='vector-frame'>
                <img src={aboutVector} className='about-vector' alt='about' />
            </div>
        </div>
    );
};

export default About;
