import React from 'react';
import { HashRouter, BrowserRouter, Route } from 'react-router-dom';
import ReactParticles from 'react-particles-js';
import particlesConfig from '../particles-config.js';

import Home from './../Home/Home';
import About from './../About/About';
import Achievements from './../Achievements/Achievements'
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

const Loading = () => {
    return(
        <div className="section-container">    
            <div className="wrapper">
                <div className="circle"></div>
                <div className="circle"></div>
                <div className="circle"></div>
                <div className="shadow"></div>
                <div className="shadow"></div>
                <div className="shadow"></div>
            </div>
        </div>
    )
}
  
const App = () => {

    const [isLoading, setLoading] = React.useState(true);


    function fakeRequest() {
        return new Promise(resolve => setTimeout(() => resolve(), 3000));
    }

    React.useEffect(() => {
      
        fakeRequest().then(() => {setLoading(!isLoading);});
        
        }, []);
    
    if (isLoading) 
        return (<Loading />);
    else
        return (
            <div>                
                {/* <HashRouter> */}
                <BrowserRouter>
                    <div id="outer-container">
                        <NavBar/>
                        <main id="page-wrap" style={{zIndex:10}}>
                            <Particles>
                                <Route path='/' exact component={Home} />
                                <Route path='/about' exact component={About} />
                                <Route path="/achievements" exact component={Achievements} />
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
