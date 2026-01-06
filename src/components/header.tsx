import { Link, useLocation } from 'react-router-dom';
import { CaretDownIcon } from '@phosphor-icons/react';
import './Header.css';

const Header = () => {
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="header-logo">
          <Link to="/" className="logo-link">
            <img 
              src="/assets/Logos/shieldLogoblue.png" 
              alt="SHIELD Logo" 
              className="logo-icon"
            />
            <span className="logo-text">SHIELD</span>
          </Link>
        </div>

        <nav className="nav-menu">
          <div className={`nav-item ${isActive('/about') ? 'active' : ''}`}>
            <Link to="/about" className="nav-link">
              About Us
            </Link>
            <CaretDownIcon size={20} weight="regular" className="dropdown-icon" />
          </div>
          
          <Link 
            to="/podcast" 
            className={`nav-link ${isActive('/podcast') ? 'active' : ''}`}
          >
            Book a Podcast
          </Link>
          
          <Link 
            to="/publications" 
            className={`nav-link ${isActive('/publications') ? 'active' : ''}`}
          >
            Publications
          </Link>
          
          <Link 
            to="/programs" 
            className={`nav-link ${isActive('/programs') ? 'active' : ''}`}
          >
            SHIELD Learn
          </Link>
          
          <Link 
            to="/donate" 
            className={`nav-link ${isActive('/donate') ? 'active' : ''}`}
          >
            Run with us
          </Link>
        </nav>

        <Link to="/donate" className="btn-donate">
          Donate
        </Link>
      </div>
    </header>
  );
};

export default Header;