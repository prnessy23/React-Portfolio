import React from 'react';
import "./about.css"
import avatar from "./images/avatar.png"
import Screenshot from "./images/screenshot.png"

function AboutMe() {
  return (
    <div className='about-me-wrapper'>
      <div className='about-me-container'>
        <img className='avatar' src={avatar} alt="My Avatar" />
        <h2> Hi,  I'm Peter Shaughnessy</h2>
        <p>I'm a newly minted full-stack developer currently finishing bootcamp and looking to add to my knowledge base. I plan on adding additional functionality to my Portfolio as I develop my craft!</p>
      </div>
      <div>
        <img className='forest-screenshot' src={Screenshot}></img>
      </div>
    </div>

  );
}


export default AboutMe;