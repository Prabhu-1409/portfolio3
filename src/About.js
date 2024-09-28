import React from "react";
import './About.css'
import image from './image/image.png'


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
                <div className="skills-inner">
                <div className="programming_languages">
                    {/* <p>This meant that the R function remotes::system_requirements("ubuntu", "20.04") could not find a package in the specified folder. Once I had added the information simply through: remotes::system_requirements("ubuntu", "20.04","myfunctionname") everything worked.</p> */}
                    <div className="language">
                        <div className="inner">
                        <h3 className="skills-topics">Programming languages</h3>
                        <p className="skills-content">
                            Java / C / Python for Machine Learning & Deep Learning
                        </p>
                        </div>
                    </div>
                    <div className="frontend">
                        <div className="inner-frontend">
                        <h3 className="skills-topics-1">FrontEnd</h3>
                        <p className="skills-content-1">
                            React / HTML / CSS / Tailwind / Flutter / React Native / BootStrap / Redux Toolkit
                        </p>
                        </div>
                    </div>
                    <div className="language">
                        <div className="inner">
                        <h3 className="skills-topics">BackEnd</h3>
                        <p className="skills-content">
                            Nodejs / Expressjs / MySQL / MongoDB
                        </p>
                        </div>
                    </div>
                    <div className="frontend">
                        <div className="inner-frontend">
                        <h3 className="skills-topics-1">Data Structures & Algorithms</h3>
                        <p className="skills-content-1">
                           Array / LinkedList / Stack / Queue
                        </p>
                        </div>
                    </div>
                </div>
                <div className="image">
                    <img className="image-class" src={image} alt="image"></img>
                </div>
                </div>
            </div>
        </div>
    )
}


export default About