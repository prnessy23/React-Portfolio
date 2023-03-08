import React from 'react';
import './footer.css'

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <ul className="list-inline">
              <li>
                <a href="https://github.com/your-github-username" target="_blank" rel="noopener noreferrer">
                  <i className="fa fa-github fa-2x"></i>
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/your-linkedin-profile-url" target="_blank" rel="noopener noreferrer">
                  <i className="fa fa-linkedin fa-2x"></i>
                </a>
              </li>
              <li>
                <a href="https://twitter.com/your-twitter-username" target="_blank" rel="noopener noreferrer">
                  <i className="fa fa-twitter fa-2x"></i>
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-4">
            <h3>Contact Me</h3>
            <ul className="list-unstyled">
              <li><i className="fa fa-envelope"></i> your-email-address</li>
              <li><i className="fa fa-phone"></i> your-phone-number</li>
            </ul>
          </div>
          </div>
      </div>
    </footer>
  );
}

export default Footer;
