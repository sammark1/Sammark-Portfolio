import Container from 'react-bootstrap/Container';


function Skills(){
    return(
        <div id='skills'>
            <h2 className="text-center">My Skillset</h2>
            <div className="row py-2">
                <div className="col text-center">
                    <h6 className="border-bottom">Python</h6>
                </div>
                <div className="col text-center">
                    <h6 className="border-bottom">JavaScript ES6</h6>
                </div>
                <div className="col text-center">
                    <h6 className="border-bottom">HTML 5</h6>
                </div>
                <div className="col text-center">
                    <h6 className="border-bottom">CSS 3</h6>
                </div>
            </div>
            Skills: Python | JavaScript (ES6) | HTML & HTML5 | CSS & CSS3 | Bootstrap | React | Node.js | Express.js | React | Django | JSON | EJS | RESTful APIs | Mongoose | MongoDB | PostgreSQL | Git / GitHub
        </div>
    )
}

export default Skills;