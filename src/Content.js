import React from "react";
import './Content.css'
import arrow from './image/arrow.png'


function Content(){
    return(
        <div className="content">
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
        </div>
    )
}

export default Content