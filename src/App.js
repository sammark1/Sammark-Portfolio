import './app.css'
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
// import * as mdb from 'mdb-ui-kit'
// import 'bootstrap/dist/js/bootstrap.bundle';
// import 'bootstrap';
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import About from "./components/About/About";
import Sidenav from "./components/Sidenav";
import ThreeJS from './components/Threejs/ThreeJS';
import Hero from './components/Hero/Hero';
import Background from './components/Background/Background';
import { ListGroupItem } from 'react-bootstrap';
import { useState } from 'react';


function App() {
  const [isShowAbout,setShowAbout] = useState(false)
  const [isShowProjects,setShowProjects] = useState(false)
  const [isShowContact,setShowContact] = useState(false)

  function showTarget(target){
    console.log('showTarget')
    switch (target) {
      case 'none': 
        setShowAbout(false);
        setShowProjects(false);
        setShowContact(false); 
        break;
      case 'about': 
        setShowAbout(true);
        setShowProjects(false);
        setShowContact(false); 
        break;
      case 'projects': 
        setShowAbout(false);
        setShowProjects(true); 
        setShowContact(false);
        break;
      case 'contact': 
        setShowAbout(false);
        setShowProjects(false); 
        setShowContact(true);
        break;
    }
  }

  return (
    <div className="App">
      {/* <button onClick={()=>showTarget('about')}>Show about</button>
      <button onClick={()=>showTarget('projects')}>Show projects</button>
      <button onClick={()=>showTarget('contact')}>Show contact</button> */}
      <ThreeJS/>
      <Sidenav showTarget={showTarget}/>
      <Container className="position-relative p-0">
        <Hero/>
        {/* <About showing={isShowAbout}/> */}
        {/* <Projects showing={isShowProjects}/> */}
        <Contact showing={isShowContact}/>
        {/* <Footer/> */}
      </Container>
      <Background/>
    </div>
  );
}

export default App;


