import React from 'react';
import './style.css';
const Footer = () => {
  return <footer>
  <div className="footer-content">
      <h3>Aniruddha Dhal</h3>
      <p>My Social Links</p>
      <ul className="socials">
          <li><a href="https://www.facebook.com/aniruddha.dhal" rel="noreferrer" target="_blank"><i className="fa fa-facebook"></i></a></li>  
          <li><a href="https://www.instagram.com/aniruddhadhal/" rel="noreferrer" target="_blank"><i className="fa fa-instagram"></i></a></li>
          <li><a href="https://github.com/aniruddhadhal" rel="noreferrer" target="_blank"><i className="fa fa-github"></i></a></li>
          <li><a href="https://www.linkedin.com/in/aniruddhadhal/" rel="noreferrer" target="_blank"><i className="fa fa-linkedin-square"></i></a></li>
          <li><a href="https://wa.me/+919641957665" rel="noreferrer" target="_blank"><i className="fa fa-whatsapp"></i></a></li>
      </ul>
  </div>
  <div className="footer-bottom">
      <p>copyright &copy;2023 Aniruddha Dhal | Designed by Aniruddha Dhal</p>
  </div>
</footer>;
};

export default Footer;
