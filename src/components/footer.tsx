// src/components/Footer.jsx
import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="container">
          <div className="footer-sections">
            {/* Organization Info */}
            <div className="footer-section">
              <h3>SHIELD International</h3>
              <p>
                Dedicated to creating positive change in our community through
                sustainable programs and impactful initiatives.
              </p>
              <div className="social-links">
                <a href="#" aria-label="Facebook">
                  📘
                </a>
                <a href="#" aria-label="Twitter">
                  🐦
                </a>
                <a href="#" aria-label="LinkedIn">
                  💼
                </a>
                <a href="#" aria-label="Instagram">
                  📸
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="footer-section">
              <h4>Quick Links</h4>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about">About Us</Link>
                </li>
                <li>
                  <Link to="/podcast">Book Podcast</Link>
                </li>
                <li>
                  <Link to="/report">Reports</Link>
                </li>
                <li>
                  <Link to="/donate">Donate</Link>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="footer-section">
              <h4>Contact Us</h4>
              <div className="contact-item">
                <span className="icon">📍</span>
                <p>
                  Olympic Estate, Kibera Drive
                  <br />
                  Nairobi, Kenya
                </p>
              </div>
              <div className="contact-item">
                <span className="icon">📞</span>
                <p>+254 700 366 137</p>
              </div>
              <div className="contact-item">
                <span className="icon">✉️</span>
                <p>info@shieldintl.org</p>
              </div>
            </div>

            {/* Newsletter */}
            <div className="footer-section">
              <h4>Have an inquiry</h4>
              <p>
                Feel free to contact us if you have any questions or wish to
                partner with us.
              </p>
              <div className="newsletter-form">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="newsletter-input"
                />
                <button className="newsletter-btn">Subscribe</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <div className="footer-bottom-content">
            <p>&copy; 2024 SHIELD International. All rights reserved.</p>
            <div className="footer-links">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
              <a href="#">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
