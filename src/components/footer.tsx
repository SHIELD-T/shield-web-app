import { Link } from 'react-router-dom';
import { PhoneIcon, EnvelopeSimpleIcon, FacebookLogoIcon, XLogoIcon, LinkedinLogoIcon, InstagramLogoIcon } from '@phosphor-icons/react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="footer-logo">
          <img 
            src="/assets/Logos/shieldLogoblue.png" 
            alt="SHIELD Logo"
            className="footer-logo-img"
          />
        </div>

        <div className="footer-columns">
          <div className="footer-column pages-column">
            <h4 className="column-title">Pages</h4>
            <nav className="footer-links">
              <Link to="/about">About Us</Link>
              <Link to="/podcast">Book a podcast</Link>
              <Link to="/publications">Publications</Link>
              <Link to="/programs">SHIELD Learn</Link>
              <Link to="/donate">Run with us</Link>
            </nav>
          </div>

          <div className="footer-column address-column">
            <h4 className="column-title">Address</h4>
            <div className="address-content">
              <p className="address-text">55 Kole Road</p>
              <div className="contact-items">
                <div className="contact-item">
                  <PhoneIcon size={20} weight="regular" className="contact-icon" />
                  <span>+245 93893093</span>
                </div>
                <div className="contact-item">
                  <EnvelopeSimpleIcon size={20} weight="regular" className="contact-icon" />
                  <span>SHIELD.com</span>
                </div>
              </div>
            </div>
          </div>

          <div className="footer-column social-column">
            <h4 className="column-title">Social Links</h4>
            <div className="social-links">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <div className="social-icon-box">
                  <FacebookLogoIcon size={21} weight="fill" />
                </div>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <div className="social-icon-box">
                  <XLogoIcon size={21} weight="fill" />
                </div>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <div className="social-icon-box">
                  <LinkedinLogoIcon size={22} weight="fill" />
                </div>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <div className="social-icon-box">
                  <InstagramLogoIcon size={24} weight="fill" />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-watermark">SHIELD</div>

      <div className="footer-copyright">
        <p>Copyright © 2025 Openlabs Africa. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;