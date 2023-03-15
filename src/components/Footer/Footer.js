import React from 'react';
import './footer.css';


function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <ul className="icons-container">
          <li>
            <a href="https://github.com/prnessy23" target="_blank" rel="noopener noreferrer">
              <i className="fa fa-github fa-2x">Github</i>
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/petershaughnessy/" target="_blank" rel="noopener noreferrer">
              <i className="fa fa-linkedin fa-2x">LinkedIn</i>
            </a>
          </li>
          <li>
            <a href="https://twitter.com/Prshaughnessy" target="_blank" rel="noopener noreferrer">
              <i className="fa fa-twitter fa-2x">Twitter</i>
            </a>
          </li>
        </ul>
        <div className="contact-container">
          <h3>Contact Me</h3>
          <ul>
            <li><i className="fa fa-envelope"></i> Email</li>
            <li><i className="fa fa-phone"></i> Phone number</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
