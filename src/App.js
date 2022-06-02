import './app.css'
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <h1>Hello World</h1>
      <a href="https://www.linkedin.com/in/sammarkdev/" target="_blank"><i class="bi bi-linkedin"></i></a>
      <a href="https://github.com/sammark1" target="_blank"><i class="bi bi-github"></i></a>
      <Container>
      <a href="details.html">Go to Details</a>
      <Button>something</Button>
      </Container>
    </div>
  );
}

export default App;
