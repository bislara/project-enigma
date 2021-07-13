import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import homeAnime from './../../assets/home_anime_3.gif';
import './Home.css';

class Home extends Component {
    // state = { showModal: false };

    // componentDidMount() {
    //     setTimeout(() => {
    //         this.setState({ showModal: true });
    //     }, 1000);
    // }

    // closeModal = () => {
    //     this.setState({ showModal: false });
    // };

    render() {
        return (
            <div className='home-container'>
                <div className='home-left'>
                    <div className='header-text'>
                        <h3>Hello World!</h3>
                        <h1>I'm Biswajeet Sahoo.</h1>
                        <p>Full Stack Developer who's ready to turn Ideas into Reality. </p>
                    </div>
                    <div className='head-btns'>
                        <Link to='/about' className='btn btn-white'>
                            <p className='btn-text'>Know more about me</p>
                        </Link>
                        <Link to='/contact' className='btn btn-transparent'>
                            <p className='btn-text'>Connect with me</p>
                        </Link>
                    </div>
                </div>

                <div className='home-right'>
                    <div className='splash-image'>
                        <img
                            src={homeAnime}
                            alt='animation'
                            className='home-anime'
                        />
                    </div>
                </div>

            </div>
        );
    }
}

export default Home;
