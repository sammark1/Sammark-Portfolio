import './app.css'
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle';
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import About from "./components/About/About";
import Sidenav from "./components/Sidenav";
import ThreeJS from './components/Threejs/ThreeJS';
import Hero from './components/Hero/Hero'
import { ListGroupItem } from 'react-bootstrap';


function App() {
  return (
    <div className="App">
      <ThreeJS/>
      <Sidenav/>
      <Hero/>
      <About/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;


