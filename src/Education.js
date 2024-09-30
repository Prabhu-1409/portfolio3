import React from 'react'
import './Education.css'


function Education(){
    return (
        <div className='education'>
            <div className='education-letter-cont'>
                <div className='education-letter-inner-cont'>
                <h3 className='work-title'>Education</h3>
                </div>
            </div>
            <div className='education-level'>
                <div className='education-level-inner'>
                <div className='education-cont'>
                    <div className='year'>
                        <p className='year-letter'>2020 - 2024</p>
                    </div>
                    <div className='institute'>
                        <p className='institute-letter'>Adhiyamaan College of Engineering</p>
                    </div>
                    <div className='course-name'>
                        <p className='course-letter'>B.E Computer Science and Engineering</p>
                    </div>
                </div>
                <div className='education-cont'>
                    <div className='year'>
                        <p className='year-letter'>2019 - 2020</p>
                    </div>
                    <div className='institute'>
                        <p className='institute-letter'>Wisdom Matriculation and Higher Secndary School</p>
                    </div>
                    <div className='course-name'>
                        <p className='course-letter'>Biology</p>
                    </div>
                </div>
                <div className='education-cont'>
                    <div className='year'>
                        <p className='year-letter'>2017 - 2018</p>
                    </div>
                    <div className='institute'>
                        <p className='institute-letter'>Wisdom Matriculation and Higher Secndary School</p>
                    </div>
                    <div className='course-name'>
                        <p className='course-letter'>Biology</p>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Education