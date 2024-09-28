import React from "react";
import './Content.css'
import arrow from './image/arrow.png'
import instagram from './image/instagram.png'
import kaggle from './image/kaggle.png'
import linkedin from  './image/linkedin.png'
import leetcode from './image/leetcode.png'
import github from './image/github.png'


function Content(){
    const icons_arr = [
        {
            name:"Instagram",
            icons:instagram
        },
        {
            name:"Github",
            icons:github
        },
        {
            name:"Kaggle",
            icons:kaggle
        },
        {
            name:"LinkedIn",
            icons:linkedin
        },
        {
            name:"Leetcode",
            icons:leetcode
        }
    ]
    return(
        <div className="content">
        {/* <div className="animation"></div> */}
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
            <div className="icons-container">
                <div className="icons-container-1">
                {
                    icons_arr.map((item,i)=>{
                        return(
                            <div className="icons-style" key={i}>
                                <div>
                                <h4 className="icon-name">{item.name}</h4>
                                </div>
                                <img className='icon-image' src={item.icons} alt={item.name}></img>
                            </div>)
                    })
                }
                </div>
            </div>
        </div>
    )
}

export default Content