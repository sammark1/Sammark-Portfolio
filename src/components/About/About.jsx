import Container from 'react-bootstrap/Container';
import Skills from './Skills'
import React, { useState } from 'react';

function About(props){

    return(
        <div className={props.showing?'transitional' : 'transitional hide'}>
            <div id='about' className=" page-height bg-light p-2">
                <h2 className="text-center">Oh look, that's me!</h2>
                {/* TODO ADD ACTUAL PHOTO HERE */}
                <p>I’m a full stack developer excited to explore innovative technologies in software development, such as AI, VR/AR, visual effects, and interaction design. With a background in game design, 2D, and 3D art, I bring creative UX and concept design skills into team-centered development. I’m looking for a role to explore new ideas in many software engineering disciplines, and endeavor to bring out the best in everyone (including myself) when working collaboratively.
                I am a multi-talented developer with an interest in the creative and innovative uses of software. Recently, I graduated General Assembly's Software Engineering Immersive program and I'm using my interests to develop new ideas into existence.
                </p>
                <a href="./assets/Samuel_Mark_Resume.pdf" className="text-center" target="_blank">
                    <p className="m-0"><i className="bi bi-file-earmark-person"></i></p>
                    <p className="mb-3">Resume</p>
                </a>
                <Skills/>
            </div>
        </div>
    )
}

export default About;