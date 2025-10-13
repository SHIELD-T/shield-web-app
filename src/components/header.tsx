// src/components/Header.jsx
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import { resolveUrl } from "../utils/assetUtils";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const heroHeight = window.innerHeight * 0.7; // 70vh hero section
      
      setIsScrolled(scrollTop > 50);
      
      // Hide header when scrolling down past hero, show when scrolling up
      if (scrollTop > heroHeight) {
        if (scrollTop > lastScrollY) {
          setIsVisible(false); // Scrolling down
        } else {
          setIsVisible(true); // Scrolling up
        }
      } else {
        setIsVisible(true); // Always show in hero section
      }
      
      setLastScrollY(scrollTop);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''} ${!isVisible ? 'hidden' : ''}`}>
      {/* Upper Section - Contact */}
      <div className="header-top">
        <div className="container">
          <div className="contact-info">
            <span className="phone">
              📞 Call Us: +254 700 366 137
            </span>
            <span className="email">
              ✉️ info@shieldintl.org
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
<img src={resolveUrl("shieldLogoblue.png")} alt="Shield International Logo" className="logo-image" />
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
                  <Link to="/programs" className="nav-link">Programs</Link>
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