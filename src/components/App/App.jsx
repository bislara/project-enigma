import React from 'react';
import { HashRouter, BrowserRouter, Route } from 'react-router-dom';
import ReactParticles from 'react-particles-js';
import particlesConfig from '../particles-config.js';

import Home from './../Home/Home';
import About from './../About/About';
import Experiences from './../Experiences/Experiences';
import Projects from './../Projects/Projects';
import Skills from './../Skills/Skills';
import Contact from './../Contact/Contact';

import './App.css';
import NavBar from '../NavBar/NavBar';
import GoHome from '../GoHome/GoHome';


function Particles({ children }) {
    return (
      <div style={{ position: 'relative' }}>
        <ReactParticles
          params={particlesConfig}
          style={{
            position: 'absolute',
            zIndex: 1,
            left: 0,
            right: 0,
            bottom: 0,
            top: 0
          }}
        />
        {children && <div style={{ position: 'relative' }}>{children}</div>}
      </div>
    );
  }

  
const App = () => {
    return (
        <div>
            
            {/* <HashRouter> */}
            <BrowserRouter>
                <div  id="outer-container">
                    <NavBar/>
                    <main id="page-wrap" style={{zIndex:10}}>
                    <Particles>

                        <Route path='/' exact component={Home} />
                        <Route path='/about' exact component={About} />
                        <Route path='/experiences' exact component={Experiences} />
                        <Route path='/projects' exact component={Projects} />
                        <Route path='/skills' exact component={Skills} />
                        <Route path='/contact' exact component={Contact} />
                        <GoHome />
                        </Particles>
                    </main>
                </div>
                </BrowserRouter>
            {/* </HashRouter> */}
        </div>
    );
};

export default App;
