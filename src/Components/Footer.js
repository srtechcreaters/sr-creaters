import React from 'react';
import './Footer.css'; // Ensure you import the CSS file

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
        <a href="/">
        <img className="logo" src="images/Screenshot 2024-12-04 113652.png" alt="logo" />
        </a>
        </div>
        <div className="footer-links">
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/projects">Services</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>
        <div className="footer-contact">
          <p>Contact Us</p>
          <p>Email: sureshattada12233@gmail.com</p>
          <p>Phone: +91 9642909195</p>
          <p>Phone: +91 7730020465</p>

        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 SR-Services. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
