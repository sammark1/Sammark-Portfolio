import Container from 'react-bootstrap/Container';
function Contact(props){
    return(
    <div className={props.showing?'transitional w-100' : 'transitional hide w-100'}>
        <div id='contact' className="page-height bg-light">
            <h2 className="text-center">How and where to find me</h2>
            <div className="row justify-content-center ">
                <a href="https://github.com/sammark1" target="blank" className="col-1 text-center text-decoration-none">
                    {/* <i class="devicon-github-original i-sk"></i> */}
                    <p className="">Github</p>
                </a>
                <a href="https://github.com/sammark1" target="blank" className="col-1 text-center text-decoration-none">
                    {/* <i class="devicon-linkedin-plain i-sk"></i> */}
                    <p className="">Linkedin</p>
                </a>
                <a href="mailto: samaustinmark@gmail.com" target="blank" className="col-1 text-center text-decoration-none">
                    {/* <i class="devicon-plain i-sk">Email</i> */}
                    <p className="">Email me</p>
                </a>
                <a href="https://samuel-mark.format.com/" target="blank" className="col-1 text-center text-decoration-none">
                    {/* <i class="devicon-plain i-sk">3D</i> */}
                    <p className="">3D art</p>
                </a>
            </div>
        </div>
    </div>
    )
}

export default Contact;