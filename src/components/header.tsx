// src/components/Header.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      {/* Upper Section - Contact */}
      <div className="header-top">
        <div className="container">
          <div className="contact-info">
            <span className="phone">
              📞 Call Us: +254 700 123 456
            </span>
            <span className="email">
              ✉️ info@npo-organization.org
            </span>
          </div>
        </div>
      </div>

      {/* Lower Section - Navigation */}
      <div className="header-bottom">
        <div className="container">
          <div className="navbar">
            <div className="logo">
              <Link to="/" className="logo-link">
                <h2>NPO Foundation</h2>
              </Link>
            </div>
            
            <nav className="nav-menu">
              <ul>
                <li>
                  <Link to="/" className="nav-link">Home</Link>
                </li>
                <li>
                  <Link to="/about" className="nav-link">About</Link>
                </li>
                <li>
                  <Link to="/podcast" className="nav-link">Book a Podcast</Link>
                </li>
                <li>
                  <Link to="/report" className="nav-link">Report</Link>
                </li>
                <li>
                  <Link to="/donate" className="nav-link donate-btn">Donate</Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;