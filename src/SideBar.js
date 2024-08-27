import React, { useEffect, useState } from 'react'
import './SideBar.css'

function SideBar() {
  const [responsive,setresponsive] = useState(false)
  // if(window.innerWidth<='768px'){
  //   console.log("yes")
  // }
  return (
    <div className='NavBar'>
    <button className='HamBurger' onClick={()=>setresponsive(!responsive)}>HamBurger</button>
      <ul className={responsive?'List':'List-Responsive'}>
        <li>About Me</li>
        <li>Experience</li>
        <li>Skills</li>
        <li>Education</li>
        <li>Blogs</li>
        <li>Contact Me</li>
      </ul>
      {/* <ul className='List-Responsive'>
        <li>About Me</li>
        <li>Experience</li>
        <li>Skills</li>
        <li>Education</li>
        <li>Blogs</li>
        <li>Contact Me</li>
      </ul> */}
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
