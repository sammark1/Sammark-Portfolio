import Container from 'react-bootstrap/Container';

function Projects(props){
    return(
        <div className={props.showing?'transitional' : 'transitional hide'}>
            <div id='projects' className="page-height">
                <div className="row">
                    <div className="col">
                        <div className="card">
                            <img src="https://static.wikia.nocookie.net/drawfee/images/9/95/Spheal-0.jpg" alt="butter"/>
                            <div class="card-body">
                                <h5 class="card-title">Project Name</h5>
                                <p class="card-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad ipsa quam cupiditate tenetur sunt veritatis ut deserunt distinctio. Soluta repellat error dolores explicabo! Facere omnis magnam, illum voluptatem voluptas eum.</p>
                                <a href="#" class="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <img src="https://static.wikia.nocookie.net/drawfee/images/9/95/Spheal-0.jpg" alt="butter"/>
                            <div class="card-body">
                                <h5 class="card-title">Project Name</h5>
                                <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, quasi. Eius odit nisi aspernatur animi corporis, incidunt dolore similique dicta ipsam repellat nobis. Veniam nesciunt minus reiciendis et dignissimos qui.</p>
                                <a href="#" class="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <img src="https://static.wikia.nocookie.net/drawfee/images/9/95/Spheal-0.jpg" alt="butter"/>
                            <div class="card-body">
                                <h5 class="card-title">Project Name</h5>
                                <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus assumenda veritatis in quod soluta, eaque enim placeat, iusto tempore cum fugit autem aspernatur beatae voluptatum, non odit. Minima, debitis dolores.</p>
                                <a href="#" class="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects;