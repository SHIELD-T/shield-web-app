// src/components/Footer.jsx
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
  <div className="footer-section">
  <h3>SHIELD International</h3>
  <p>
    Dedicated to creating positive change in our community through
    sustainable programs and impactful initiatives.
  </p>
  <div className="social-links-f">
    
  
    <a href="https://www.linkedin.com/company/shieldintlorg" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
      <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" width="24" height="24" viewBox="0 0 24 24">
        <path fill="#0A66C2" d="M21,21H17V14.25C17,13.19 15.81,12.31 14.75,12.31C13.69,12.31 13,13.19 13,14.25V21H9V9H13V11C13.66,9.93 15.36,9.24 16.5,9.24C19,9.24 21,11.28 21,13.75V21M7,21H3V9H7V21M5,3A2,2 0 0,1 7,5A2,2 0 0,1 5,7A2,2 0 0,1 3,5A2,2 0 0,1 5,3Z" />
      </svg>
      
    </a>
    <a href="https://www.instagram.com/shield_intl/" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
      <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="24" height="24" viewBox="0 0 169.063 169.063" xmlSpace="preserve">
        <g>
          <path fill="#E4405F" d="M122.406,0H46.654C20.929,0,0,20.93,0,46.655v75.752c0,25.726,20.929,46.655,46.654,46.655h75.752 c25.727,0,46.656-20.93,46.656-46.655V46.655C169.063,20.93,148.133,0,122.406,0z M154.063,122.407 c0,17.455-14.201,31.655-31.656,31.655H46.654C29.2,154.063,15,139.862,15,122.407V46.655C15,29.201,29.2,15,46.654,15h75.752 c17.455,0,31.656,14.201,31.656,31.655V122.407z" />
          <path fill="#E4405F" d="M84.531,40.97c-24.021,0-43.563,19.542-43.563,43.563c0,24.02,19.542,43.561,43.563,43.561s43.563-19.541,43.563-43.561 C128.094,60.512,108.552,40.97,84.531,40.97z M84.531,113.093c-15.749,0-28.563-12.812-28.563-28.561 c0-15.75,12.813-28.563,28.563-28.563s28.563,12.813,28.563,28.563C113.094,100.281,100.28,113.093,84.531,113.093z" />
          <circle fill="#E4405F" cx="84.531" cy="84.532" r="5.822"/>
          <path fill="#E4405F" d="M129.921,28.251c-2.89,0-5.729,1.17-7.77,3.22c-2.051,2.04-3.23,4.88-3.23,7.78c0,2.891,1.18,5.73,3.23,7.78 c2.04,2.04,4.88,3.22,7.77,3.22c2.9,0,5.73-1.18,7.78-3.22c2.05-2.05,3.22-4.89,3.22-7.78c0-2.9-1.17-5.74-3.22-7.78 C135.661,29.421,132.821,28.251,129.921,28.251z" />
        </g>
      </svg>
    </a>
  </div>
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
                  <Link to="/programs">Programs</Link>
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
