import React from 'react';
import Photo from './images/myPhoto.jpeg'
import './style.css';
import resume from './images/AniruddhaDhal_res.pdf';

const About = (props) => {
  return <section className={`about ${props.mode?'':'temp'}`} id="about">
  <div className="max-width">
      <h2 className="title">About me</h2>
      <div className="about-content">
          <div className="column left">
              <img src={Photo} alt='myPhot'/>
          </div>
          <div className="column right">
              <div className="text">I'm Aniruddha and I'm a <br/><span className="typing-2"></span></div>
              <p>Hello viewers, this is s brief introduction of mine. I am a full stack web developer and used different technology in web development. I started my web development with MERN technology is becoming suitable for my full stack web development. Apart from web technologies, I am doing programming in different languages like c, c++, java, etc. I am now at learning phase and want to explore more in this field.</p>
              <a href={resume} download={resume}><button>Download CV</button></a>
              
          </div>
      </div>
  </div>
</section>  
;
};

export default About;
