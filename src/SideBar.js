import React from 'react'
import './SideBar.css'

function SideBar() {
  return (
    <div className='SideBar'>
      <ul>
        <li>About Me</li>
        <li>Experience</li>
        <li>Skills</li>
        <li>Education</li>
        <li>Blogs</li>
        <li>Contact Me</li>
      </ul>
      {/* <div>
      <h4>About Me</h4>
      </div>
      <div>
      <h4>Experience</h4>
      </div>
      <div>
      <h4>Skills</h4>
      </div>
      <div>
      <h4>Education</h4>
      </div>
      <div>
      <h4>Blogs</h4>
      </div>
      <div>
      <h4>Contact Me</h4>
      </div> */}
    </div>
  )
}

export default SideBar
