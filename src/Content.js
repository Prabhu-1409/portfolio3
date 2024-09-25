import React from "react";
import './Content.css'
import arrow from './image/arrow.png'


function Content(){
    return(
        <div className="content">
            <div className="content-body">
            <div className="designation">
                <div className="software">
                    <h1 className="font">Software</h1>
                </div>
                <div className="project-button">
                    {/* <div className="project-container"> */}
                    <button className="projects">Projects</button>
                    <div className="arrow-container">
                        <img className="arrow" src={arrow}></img>
                    </div>
                    {/* </div> */}
                </div>
            </div>
            <div className="objective">
                <div className="paragraph">
                    <div className="alignment">
                    <p>My goal is to write </p>
                    <p className="highlighted">maintainable, clean</p>
                    </div>
                    <div className="alignment">
                    <p>and</p>
                    <p className="highlighted">understandable code</p>
                    <p>to process</p> 
                    </div>
                    <div className="alignment">
                    <p>developement was enjoyable</p>
                    </div>
                </div>
                <div className="developer">
                    <h1 className="font">Developer</h1>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Content