import React from 'react';
import FooterLink from '../FooterLink/FooterLink';
import Header from '../Header/Header';
import './Contact.css';
import contactVector from './../../assets/contact_anime.png';
import github from './../../assets/gh.png';
import linkedin from './../../assets/li.png';
import instagram from './../../assets/in.png';
import fb from './../../assets/fbIcon.png';
import web from './../../assets/web.png';
import phone from './../../assets/phoneIcon.png';
import email from './../../assets/emailIcon.png';
import address from './../../assets/addressIcon.png';

const Contact = () => {
    return (
        <div className='section-container'>
            <Header
                heading='Get in touch.'
                details='Interested to collaborate? Feel free to drop me an email.'
            />

            {/* Form section */}
            <div className='contact-form-container'>
                <form 
                    className='contact-form' 
                    name="contactForm"
                    method="post"
                    action="https://formspree.io/f/moqpeeee"
                >

                    <input
                        name="contactName"
                        type="text"
                        id="contactName"
                        placeholder="Your Name"
                        minlength="2"
                        className='input-box email-input'
                        required={true}
                        autoComplete='off'
                    />  
                    {/* Email Id Input */}
                    <input
                        type='email'
                        id="contactEmail"
                        placeholder='Your Email ID'
                        name="_replyto"
                        className='input-box email-input'
                        autoComplete='off'
                        required={true}
                    />

                    <input
                        name="contactSubject"
                        type="text"
                        id="contactSubject"
                        placeholder="Subject"
                        className='input-box email-input'
                        />

                    {/* Email Body */}
                    <textarea
                        type='text'
                        placeholder='Your Message'
                        name='message'
                        className='input-box body-input'
                        required ={true}
                    ></textarea>

                    {/* Submit button */}
                    <button type='submit' className='btn-grad'>
                        Send Email
                    </button>
                </form>
            </div>

            <div className="details-container">

                <div className="details">
                    <img src={address} style={{width: "80px",marginLeft: "auto",marginRight: "auto"}}/>
                    <h4>Where to Find Me</h4>
                    <p>Flat no- 4/A, Chiranjiv Complex, Mangalabag, Cuttack, Odisha, India, Pin Code-753001</p>
                </div>

                <div className="details">
                    <img src={email} style={{width: "80px",marginLeft: "auto",marginRight: "auto"}}/>
                    <h4>Email me at</h4>
                    <p>biswajeetsahoo54@gmail.com</p>
                </div>
                
                <div className="details">
                    <img src={phone} style={{width: "80px",marginLeft: "auto",marginRight: "auto"}}/>
                    <h4>Call me at</h4>
                    <p>Phone: (+91) 97787 56623</p>
                </div>
                
            </div>

            {/* Social icons */}
            <div className='social-icons-container'>
                <a href='https://github.com/bislara' target="_blank" className='social-icon'>
                    <img src={github} alt='social' style={{height: "50px"}}/>
                </a>
                <a
                    href='https://www.linkedin.com/in/biswajeet-sahoo-lara/'
                    className='social-icon'
                    target="_blank"
                >
                    <img src={linkedin} alt='social' style={{height: "50px"}}/>
                </a>
                <a
                    href='https://www.instagram.com/bis_lara/'
                    className='social-icon'
                    target="_blank"
                >
                    <img src={instagram} alt='social' style={{height: "50px"}}/>
                </a>
                <a
                    href='https://www.facebook.com/biswajeet.sahoo.lara/'
                    className='social-icon'
                    target="_blank"
                >
                    <img src={fb} alt='social' style={{height: "50px"}}/>
                </a>
            </div>

            <FooterLink
                phrase='Read more '
                toAdress='/about'
                link='about me.'
            />

            <div className='vector-frame'>
                <img
                    src={contactVector}
                    alt='vector'
                    className='about-vector'
                />
            </div>
        </div>
    );
};

export default Contact;
