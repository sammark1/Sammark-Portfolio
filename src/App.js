import './app.css'
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Sidenav from "./components/Sidenav";
import ThreeJS from './components/ThreeJS';

function App() {
  return (
    <div className="App">
      <ThreeJS/>
      <Container>
      <h1>Samportfolio</h1>
      <Sidenav/>
      <a href="details.html">non-functioning link</a>
      <Button>Bootstrap Button</Button>
      </Container>
    </div>
  );
}

export default App;
