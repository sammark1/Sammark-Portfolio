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
                                <TooltipIcon classPass={"i-project"} tooltip={"MongoDB"} isrc={"devicon-mongodb-plain"}/>
                                <TooltipIcon classPass={"i-project"} tooltip={"Bootstrap"} isrc={"devicon-bootstrap-plain"}/>
                                </p>
                                <a href="https://github.com/sammark1/Compend" target="_blank" className="btn btn-primary">Repository</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row mb-4">
                    <div className="col">
                        <div className="card">
                            <img src="https://static.wikia.nocookie.net/drawfee/images/9/95/Spheal-0.jpg" alt="butter"/>
                            <div className="card-body">
                                <h5 className="card-title">Project Name</h5>
                                <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, quasi. Eius odit nisi aspernatur animi corporis, incidunt dolore similique dicta ipsam repellat nobis. Veniam nesciunt minus reiciendis et dignissimos qui.</p>
                                <a href="#" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <img src="https://static.wikia.nocookie.net/drawfee/images/9/95/Spheal-0.jpg" alt="butter"/>
                            <div className="card-body">
                                <h5 className="card-title">Project Name</h5>
                                <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus assumenda veritatis in quod soluta, eaque enim placeat, iusto tempore cum fugit autem aspernatur beatae voluptatum, non odit. Minima, debitis dolores.</p>
                                <a href="#" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <img src="https://static.wikia.nocookie.net/drawfee/images/9/95/Spheal-0.jpg" alt="butter"/>
                            <div className="card-body">
                                <h5 className="card-title">Project Name</h5>
                                <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus assumenda veritatis in quod soluta, eaque enim placeat, iusto tempore cum fugit autem aspernatur beatae voluptatum, non odit. Minima, debitis dolores.</p>
                                <a href="#" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects;