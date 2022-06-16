import Container from 'react-bootstrap/Container';
function Contact(props){
    return(
        //TODO ADD ICONS FROM BOOTSTRAP ICONS 
    <div className={props.showing?'transitional w-100' : 'transitional hide w-100'}>
        <div id='contact' className="page-height bg-light">
            <h2 className="text-center">How and where to find me</h2>
            <div className="d-flex flex-wrap justify-content-center ">
                <a href="https://github.com/sammark1" target="blank" className="px-3 text-center text-decoration-none">
                    <i className="bi bi-github"></i>
                    <p className="">Github</p>
                </a>
                <a href="https://www.linkedin.com/in/sammarkdev/" target="blank" className="px-3 text-center text-decoration-none">
                    <i className="bi bi-linkedin"></i>
                    <p className="">Linkedin</p>
                </a>
                <a href="mailto: samaustinmark@gmail.com" target="blank" className="px-3 text-center text-decoration-none">
                    <i className="bi bi-envelope"></i>
                    <p className="">Email me</p>
                </a>
                <a href="https://samuel-mark.format.com/" target="blank" className="px-3 text-center text-decoration-none">
                    <i className="bi bi-badge-3d"></i>
                    <p className="">3D art</p>
                </a>
                <a href="./assets/Samuel_Mark_Resume.pdf" target="blank" className="px-3 text-center text-decoration-none">
                    <i className="bi bi-file-earmark-person"></i>
                    <p className="">Resume</p>
                </a>
            </div>
        </div>
    </div>
    )
}

export default Contact;