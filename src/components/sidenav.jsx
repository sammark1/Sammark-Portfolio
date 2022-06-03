import { useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
// import Button from 'react-bootstrap/Button';

function Sidenav() {

    const navigate=useNavigate();
    return(
        <Container className="d-flex flex-column flex-shrink-0 bg-light">
            <ul className="nav nav-pills nav-flush flex-column mb-auto text-center">
                <li>
                    <a href="https://www.linkedin.com/in/sammarkdev/" target="_blank" className="nav-link py-3 border-bottom"><i class="bi bi-linkedin"></i></a>
                </li>
                <li>
                    <a href="https://github.com/sammark1" target="_blank" className="nav-link py-3 border-bottom"><i class="bi bi-github"></i></a>
                </li>
            </ul>
        </Container>
        
    )
}
  
export default Sidenav;