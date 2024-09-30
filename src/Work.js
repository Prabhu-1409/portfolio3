import React from 'react'
import './Work.css'

function Work (){
    return(
        <div className='work'>
            <div className='work-title-cont'>
                <div className='work-title-inner-cont'>
                <h3 className='work-title'>Work</h3>
                </div>
            </div>
            <div className='work-exp'>
                <div className='first-experience'>
                    <div className='years'>
                        <p className='years-letter'>July 15th 2024 - Present</p>
                    </div>
                    <div className='company-name'>
                        <p className='company-letter'>Winspire Tech Private Ltd</p>
                    </div>
                    <div className='role'>
                        <p className='role-letter'>Software Developer</p>
                    </div>
                    <div className='technology'>
                        <p className='technology-letter'>React /  React Native / Laravel / Nodejs / MySQL / CICD / AWS </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Work