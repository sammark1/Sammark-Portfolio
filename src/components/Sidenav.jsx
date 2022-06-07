import { useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Sidenav() {

    const navigate=useNavigate();
    return(
        // <Navbar>
        //     <ul className="nav nav-pills flex-column">
        //         <li class="nav-item">
        //             <a href="https://www.linkedin.com/in/sammarkdev/" target="_blank" className="nav-link"><i className="bi bi-linkedin"></i></a>
        //         </li>
        //         <li class="nav-item">
        //             <a href="https://github.com/sammark1" target="_blank" className="nav-link"><i className="bi bi-github"></i></a>
        //         </li>
        //     </ul>
        // </Navbar>
        // <Navbar className="navbar d-flex flex-column navbar-expand-md fixed-left bg-light">
        //     <ul className="nav nav-pills nav-flush flex-column mb-auto text-center">
        //         <li>
        //             <a href="" className="nav-link py-3 border-bottom"><h4><i className="bi bi-linkedin"></i></h4></a>
        //         </li>
        //         <li>
        //             <a href="" className="nav-link py-3 border-bottom"><h4><i className="bi bi-linkedin"></i></h4></a>
        //         </li>
        //         <li>
        //             <a href="" className="nav-link py-3 border-bottom"><h4><i className="bi bi-linkedin"></i></h4></a>
        //         </li>
        //         <li>
        //             <a href="https://www.linkedin.com/in/sammarkdev/" target="_blank" className="nav-link py-3 border-bottom"><i className="bi bi-linkedin"></i></a>
        //         </li>
        //         <li>
        //             <a href="https://github.com/sammark1" target="_blank" className="nav-link py-3 border-bottom"><i className="bi bi-github"></i></a>
        //         </li>
        //     </ul>
        // </Navbar>
        // <nav className="navbar navbar-expand-md sticky-top navbar-light bg-light">
        //     <Container>
        //         <a className="navbar-brand">Sam-Mark-Dev</a>
                
        //             <span class="navbar-toggler-icon"></span>
        //         </button>
        //         <div class="collapse navbar-collapse" id="navbar1">
        //             <ul class="navbar-nav">
        //                 <li class="nav-item active">
        //                     <a class="nav-link" href="#">About Me</a>
        //                 </li>
        //                 <li class="nav-item">
        //                     <a class="nav-link" href="#">Projects</a>
        //                 </li>
        //                 <li class="nav-item">
        //                     <a class="nav-link" href="#">Contact</a>
        //                 </li>
        //             </ul>
        //         </div>
        //     </Container>
        // </nav>
        <nav class="navbar navbar-expand-md navbar-light sticky-top bg-light">
            <Container>
            <a class="navbar-brand" href="#">SamMarkDev</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarCollapse">
                <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                    <a class="nav-link" href="#about">About Me</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link anchor" href="#projects">Projects</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#skills">Skills</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#contact">Contact</a>
                </li>
                </ul>
            </div>
            </Container>
    </nav>
        
    )
}
  
export default Sidenav;
