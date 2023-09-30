import React from 'react';
import './style.css';
const Header = (props) => {
    const {set,mode}=props;
  return  <nav className="navbar">
  <div className="max-width">
      <div className="logo"><a href="#home">Anirud<span>dha.</span></a></div>
      <ul className="menu"> 
          
          <li><p  onClick={()=>set(!mode)} className="menu-btn"><i className={`fas fa-${mode?'moon':'sun'}`}></i></p></li>
          <li><a href="#about" className="menu-btn">About</a></li>
          <li><a href="#services" className="menu-btn">Abilities</a></li>
          <li><a href="#skills" className="menu-btn">Skills</a></li>
          <li><a href="#teams" className="menu-btn">Projects</a></li>
          <li><a href="#contact" className="menu-btn">Contact</a></li>
      </ul>
      <div className="menu-btn">
          <i className="fas fa-bars"></i>
      </div>
  </div>
 
</nav>;
};

export default Header;
