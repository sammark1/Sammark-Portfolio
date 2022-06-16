import TooltipIcon from './TooltipIcon'

function Projects(props){
    return(
        
        <div className={props.showing?'transitional' : 'transitional hide'}>
            <div id='projects' className="page-height">
                <div className="d-flex flex-wrap">
                    <div className="py-2">
                        <div className="card bg-light">
                            <a className="bg-image project rounded" href="./assets/Compend02.png" target="blank">
                                <img src="./assets/Compend02.png" alt="compend image" style={{maxWidth:'100%'}} className="img-project"/>
                            </a>
                            <div className="card-body">
                                <h2 className="card-title text-center">Compend</h2>
                                <p className="card-text"> 
                                Compend is a full-stack django application designed as an adventure game compendium for players and GMs. It is my capstone project for General Assembly
                                <ul>
                                    <li>Mobile responsive layout utilizing bootstrap</li>
                                    <li>System to upload .csv spreadsheets</li>
                                    <li>User Auth System</li>
                                </ul>
                                </p>
                                <p className="d-flex justify-content-center text-secondary">
                                <TooltipIcon classPass={"i-project"} tooltip={"Python"} isrc={"devicon-python-plain"}/>
                                <TooltipIcon classPass={"i-project"} tooltip={"Django"} isrc={"devicon-django-plain"}/> 
                                <TooltipIcon classPass={"i-project"} tooltip={"PostgreSQL"} isrc={"devicon-postgresql-plain"}/>
                                <TooltipIcon classPass={"i-project"} tooltip={"Bootstrap"} isrc={"devicon-bootstrap-plain"}/>
                                </p>
                                <a href="https://github.com/sammark1/Compend" target="_blank" className="btn btn-secondary text-white"><span className="devicon-github-original"></span> Repository</a>
                            </div>
                        </div>
                    </div>
                    <div className="py-2">
                        <div className="card bg-light">
                            <a className="bg-image project rounded" href="./assets/LaunchAProbe01.png" target="blank">
                                <img src="./assets/LaunchAProbe01.png" alt="butter" className="img-project"/>
                            </a>
                            <div className="card-body">
                                <h2 className="card-title text-center">Launch a Probe</h2>
                                <p className="card-text"> 
                                Launch a Probe is a full-stack django space exploration experience utilizing PostgreSQL and ThreeJS. Users experience remote space exploration as they scan nearby star systems for information on the stars and planetoids. Features full CRUD on procedurally generated content and 3D animated VFX.
                                </p>
                                <p className="d-flex justify-content-center text-secondary">
                                <TooltipIcon classPass={"i-project"} tooltip={"Python"} isrc={"devicon-python-plain"}/>
                                <TooltipIcon classPass={"i-project"} tooltip={"Yarn"} isrc={"devicon-yarn-plain"}/>
                                <TooltipIcon classPass={"i-project"} tooltip={"Django"} isrc={"devicon-django-plain"}/> 
                                <TooltipIcon classPass={"i-project"} tooltip={"ThreeJS"} isrc={"devicon-threejs-original"}/>
                                <TooltipIcon classPass={"i-project"} tooltip={"PostgreSQL"} isrc={"devicon-postgresql-plain"}/>
                                </p>
                                <div className="btn-group">
                                    <a href="https://github.com/sammark1/Launch-a-Probe" target="_blank" className="btn btn-secondary text-white"><span className="devicon-github-original"></span> Repository</a>
                                    <a href="https://launch-a-probe.herokuapp.com/" target="_blank" className="btn btn-secondary text-white"><span className="devicon-heroku-original"></span> Deploy</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="py-2">
                        <div className="card bg-light">
                            <a className="bg-image project rounded" href="./assets/Revuu01.png" target="blank">
                                <img src="./assets/Revuu01.png" alt="butter" className="img-project"/>
                            </a>
                            <div className="card-body">
                                <h2 className="card-title text-center">Revuu</h2>
                                <p className="card-text"> 
                                Revuu is a collaborative full-stack React Application utilizing MongoDB. Users create an account and can read or create reviews on anthing within a set of categories.
                                </p>                                <p className="d-flex justify-content-center text-secondary">
                                <TooltipIcon classPass={"i-project"} tooltip={"React"} isrc={"devicon-react-original"}/> 
                                <TooltipIcon classPass={"i-project"} tooltip={"Express"} isrc={"devicon-express-original"}/>
                                <TooltipIcon classPass={"i-project"} tooltip={"MongoDB"} isrc={"devicon-mongodb-plain"}/>
                                </p>
                                <div className="btn-group">
                                    <a href="https://github.com/janiceh94/Revuu" target="_blank" className="btn btn-secondary text-white"><span className="devicon-github-original"></span> Repository</a>
                                    <a href="https://revuu.herokuapp.com/" target="_blank" className="btn btn-secondary text-white"><span className="devicon-heroku-original"></span> Deploy</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="py-2">
                        <div className="card bg-light">
                            <a className="bg-image project rounded" href="./assets/Intangicart01.png" target="blank">
                                <img src="./assets/Intangicart01.png" alt="butter" className="img-project"/>
                            </a>
                            <div className="card-body">
                                <h2 className="card-title text-center">Intangicart</h2>
                                <p className="card-text"> 
                                    Intagicart is a collaborative Express parody application utilizing MongoDB. Users experience a humorous parody NFT commerce environment.
                                </p>                                 <p className="d-flex justify-content-center text-secondary"> 
                                <TooltipIcon classPass={"i-project"} tooltip={"NodeJS"} isrc={"devicon-nodejs-plain"}/>
                                <TooltipIcon classPass={"i-project"} tooltip={"Express"} isrc={"devicon-express-original"}/>
                                <TooltipIcon classPass={"i-project"} tooltip={"MongoDB"} isrc={"devicon-mongodb-plain"}/>
                                </p>
                                <div className="btn-group">
                                    <a href="https://github.com/sammark1/Intangicart" target="_blank" className="btn btn-secondary text-white text-white"><span className="devicon-github-original"></span> Repository</a>
                                    <a href="https://intangicart.herokuapp.com/landing" target="_blank" className="btn btn-secondary text-white text-white"><span className="devicon-heroku-original"></span> Deploy</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="py-2">
                        <div className="card bg-light">
                            <a className="bg-image project rounded" href="./assets/MLBeholder01.png" target="blank">
                                <img src="./assets/MLBeholder01.png" alt="butter" className="img-project"/>
                            </a>
                            <div className="card-body">
                                <h2 className="card-title text-center">My Little Beholder</h2>
                                <p className="card-text"> 
                                    My Little Beholder is a Javascript game utilizing Jquery. Players name their own beholder and guide them through a series of events affecting various stats as they travel through a mysterious dungeon to replace the boss.
                                </p>                                <p className="d-flex justify-content-center text-secondary"> 
                                <TooltipIcon classPass={"i-project"} tooltip={"JavaScript"} isrc={"devicon-javascript-plain"}/>
                                <TooltipIcon classPass={"i-project"} tooltip={"JQuery"} isrc={"devicon-jquery-plain"}/>
                                <TooltipIcon classPass={"i-project"} tooltip={"CSS3"} isrc={"devicon-css3-plain"}/>
                                <TooltipIcon classPass={"i-project"} tooltip={"HTML5"} isrc={"devicon-html5-plain"}/>
                                </p>
                                <a href="https://github.com/sammark1/My-Little-Beholder-JS-Adventure" target="_blank" className="btn btn-secondary text-white text-white"><span className="devicon-github-original"></span> Repository</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects;