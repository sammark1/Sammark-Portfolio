import TooltipIcon from './TooltipIcon'

function Projects(props){
    return(
        <div className={props.showing?'transitional' : 'transitional hide'}>
            <div id='projects' className="page-height">
                <div className="row mb-4">
                    <div className="col">
                        <div className="card">
                            <img src="./assets/Compend02.png" alt="compend image" style={{maxWidth:'100%'}}/>
                            <div className="card-body">
                                <h2 className="card-title text-center">Compend</h2>
                                <p className="card-text"> 
                                Compend is a full-stack django application designed as an adventure game compendium for players and GMs. It features a mobile responsive layout, easy to use UX and a system to upload .csv spreadsheets. My capstone project for General Assembly
                                </p>
                                <p className="d-flex justify-content-center text-secondary">
                                <TooltipIcon classPass={"i-project"} tooltip={"Python"} isrc={"devicon-python-plain"}/>
                                <TooltipIcon classPass={"i-project"} tooltip={"Django"} isrc={"devicon-django-plain"}/> 
                                <TooltipIcon classPass={"i-project"} tooltip={"PostgreSQL"} isrc={"devicon-postgresql-plain"}/>
                                <TooltipIcon classPass={"i-project"} tooltip={"Bootstrap"} isrc={"devicon-bootstrap-plain"}/>
                                </p>
                                <a href="https://github.com/sammark1/Compend" target="_blank" className="btn btn-secondary"><span className="devicon-github-original"></span> Repository</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row mb-4">
                    <div className="col-6">
                        <div className="card mb-4">
                            <img src="./assets/LaunchAProbe01.png" alt="butter"/>
                            <div className="card-body">
                                <h2 className="card-title text-center">Launch a Probe</h2>
                                <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, quasi. Eius odit nisi aspernatur animi corporis, incidunt dolore similique dicta ipsam repellat nobis. Veniam nesciunt minus reiciendis et dignissimos qui.</p>
                                <p className="d-flex justify-content-center text-secondary">
                                <TooltipIcon classPass={"i-project"} tooltip={"Python"} isrc={"devicon-python-plain"}/>
                                <TooltipIcon classPass={"i-project"} tooltip={"Yarn"} isrc={"devicon-yarn-plain"}/>
                                <TooltipIcon classPass={"i-project"} tooltip={"Django"} isrc={"devicon-django-plain"}/> 
                                <TooltipIcon classPass={"i-project"} tooltip={"ThreeJS"} isrc={"devicon-threejs-original"}/>
                                <TooltipIcon classPass={"i-project"} tooltip={"PostgreSQL"} isrc={"devicon-postgresql-plain"}/>
                                </p>
                                <div className="btn-group">
                                    <a href="https://github.com/sammark1/Launch-a-Probe" target="_blank" className="btn btn-secondary"><span className="devicon-github-original"></span> Repository</a>
                                    <a href="https://launch-a-probe.herokuapp.com/" target="_blank" className="btn btn-secondary"><span className="devicon-heroku-original"></span> Deploy</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="card mb-4">
                            <img src="./assets/Revuu01.png" alt="butter"/>
                            <div className="card-body">
                                <h2 className="card-title text-center">Revuu</h2>
                                <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus assumenda veritatis in quod soluta, eaque enim placeat, iusto tempore cum fugit autem aspernatur beatae voluptatum, non odit. Minima, debitis dolores.</p>
                                <p className="d-flex justify-content-center text-secondary">
                                <TooltipIcon classPass={"i-project"} tooltip={"React"} isrc={"devicon-react-original"}/> 
                                <TooltipIcon classPass={"i-project"} tooltip={"Express"} isrc={"devicon-express-original"}/>
                                <TooltipIcon classPass={"i-project"} tooltip={"MongoDB"} isrc={"devicon-mongodb-plain"}/>
                                </p>
                                <div className="btn-group">
                                    <a href="https://github.com/janiceh94/Revuu" target="_blank" className="btn btn-secondary"><span className="devicon-github-original"></span> Repository</a>
                                    <a href="https://revuu.herokuapp.com/" target="_blank" className="btn btn-secondary"><span className="devicon-heroku-original"></span> Deploy</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="card mb-4">
                            <img src="./assets/Intangicart01.png" alt="butter"/>
                            <div className="card-body">
                                <h2 className="card-title text-center">Intangicart</h2>
                                <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus assumenda veritatis in quod soluta, eaque enim placeat, iusto tempore cum fugit autem aspernatur beatae voluptatum, non odit. Minima, debitis dolores.</p>
                                <p className="d-flex justify-content-center text-secondary"> 
                                <TooltipIcon classPass={"i-project"} tooltip={"NodeJS"} isrc={"devicon-nodejs-plain"}/>
                                <TooltipIcon classPass={"i-project"} tooltip={"Express"} isrc={"devicon-express-original"}/>
                                <TooltipIcon classPass={"i-project"} tooltip={"MongoDB"} isrc={"devicon-mongodb-plain"}/>
                                </p>
                                <div className="btn-group">
                                    <a href="https://github.com/sammark1/Intangicart" target="_blank" className="btn btn-secondary"><span className="devicon-github-original"></span> Repository</a>
                                    <a href="https://intangicart.herokuapp.com/landing" target="_blank" className="btn btn-secondary"><span className="devicon-heroku-original"></span> Deploy</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="card mb-4">
                            <img src="./assets/MLBeholder01.png" alt="butter"/>
                            <div className="card-body">
                                <h2 className="card-title text-center">My Little Beholder</h2>
                                <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus assumenda veritatis in quod soluta, eaque enim placeat, iusto tempore cum fugit autem aspernatur beatae voluptatum, non odit. Minima, debitis dolores.</p>
                                <p className="d-flex justify-content-center text-secondary"> 
                                <TooltipIcon classPass={"i-project"} tooltip={"JavaScript"} isrc={"devicon-javascript-plain"}/>
                                <TooltipIcon classPass={"i-project"} tooltip={"JQuery"} isrc={"devicon-jquery-plain"}/>
                                <TooltipIcon classPass={"i-project"} tooltip={"CSS3"} isrc={"devicon-css3-plain"}/>
                                <TooltipIcon classPass={"i-project"} tooltip={"HTML5"} isrc={"devicon-html5-plain"}/>
                                </p>
                                <a href="https://github.com/sammark1/My-Little-Beholder-JS-Adventure" target="_blank" className="btn btn-secondary"><span className="devicon-github-original"></span> Repository</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects;