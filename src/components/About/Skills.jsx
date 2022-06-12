import Container from 'react-bootstrap/Container';
import TooltipIcon from '../TooltipIcon'


function Skills(){
    return(
        <div id='skills'>
            <h2 className="text-center">Developer Skills</h2>
            <div className="row justify-content-center">
                <div className="col-1 text-center">
                    <i class="devicon-python-plain i-sk"></i>
                    <p className="">Python</p>
                </div>
                <div className="col-1 text-center">
                    <i class="devicon-javascript-plain i-sk"></i>
                    <p className="">JavaScript (ES6)</p>
                </div>
                <div className="col-1 text-center">
                    <i class="devicon-html5-plain i-sk"></i>
                    <p className="">HTML 5</p>
                </div>
                <div className="col-1 text-center">
                    <i class="devicon-css3-plain i-sk"></i>
                    <p className="">CSS3</p>
                </div>
                <div className="col-1 text-center">
                    <i class="devicon-react-original i-sk"></i>
                    <p className="">React</p>
                </div>
                <div className="col-1 text-center">
                    <i class="devicon-nodejs-plain i-sk"></i>
                    <p className="">Node.js</p>
                </div>
                <div className="col-1 text-center">
                    <i class="devicon-express-original i-sk"></i>
                    <p className="">Express.js</p>
                </div>
                <div className="col-1 text-center">
                    <i class="devicon-django-plain i-sk"></i>
                    <p className="">Django</p>
                </div>
                <div className="col-1 text-center">
                    <i class="devicon-original t-sk">EJS</i>
                    <p className="">EJS</p>
                </div>
                <div className="col-1 text-center">
                    <i class="devicon-npm-original-wordmark i-sk"></i>
                    <p className="">NPM</p>
                </div>
                <div className="col-1 text-center">
                    <i class="devicon-yarn-plain i-sk"></i>
                    <p className="">Yarn</p>
                </div>
                <div className="col-1 text-center">
                    <i class="devicon-git-plain i-sk"></i>
                    <p className="">Git</p>
                </div>
                <div className="col-1 text-center">
                    <a href="https://github.com/sammark1" target="blank" className="text-black text-decoration-none">
                    <i class="devicon-github-original i-sk"></i>
                    <p className="">Github</p>
                    </a>
                </div>
            </div>
            <h2 className="text-center">Designer Skills</h2>
            <div className="row justify-content-center">
                <div className="col-1 text-center">
                    <i class="devicon-bootstrap-plain i-sk"></i>
                    <p className="">Bootstrap</p>
                </div>
                <div className="col-1 text-center">
                    <i class="devicon-figma-plain i-sk"></i>
                    <p className="">Figma</p>
                </div>
                <div className="col-1 text-center">
                    <i class="devicon-threejs-original i-sk"></i>
                    <p className="">ThreeJS</p>
                </div>
                <div className="col-1 text-center">
                    <i class="devicon-maya-plain i-sk"></i>
                    <p className="">Maya</p>
                </div>
                <div className="col-1 text-center">
                    <i class="devicon-photoshop-plain i-sk"></i>
                    <p className="">Photoshop</p>
                </div>
            </div>
        </div>
    )
}

export default Skills;