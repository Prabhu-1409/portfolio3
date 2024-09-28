import React from "react";
import './About.css'


function About(){
    return(
        <div className="about">
            <div className="circle1"></div>
            <div className='about-inner'>
                <div className="about-letter">
                    <h4 className="about-spell">.../About me ...</h4>
                </div>
                <div className="info">
                    <p className="info-para">I figured it out in the end but will leave this here, as it might be useful for someone else!
                        The error was associated with the R code that was in the command, so if this occurs to you as well, focus in on the R-part of your code rather than on the workflow code</p>
                </div>
            </div>
            <div className="skills">
                <div>
                <div className="programming_languages">

                </div>
                </div>
                <div className="image">

                </div>
            </div>
        </div>
    )
}


export default About