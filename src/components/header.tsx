import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { List, X } from '@phosphor-icons/react';
import DonateModal from '../pages/donatemodal';
import './Header.css';

const Header = () => {
  const location = useLocation();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const isRunPage = location.pathname === '/run';

  return (
    <header className={`header ${isRunPage ? 'transparent' : ''}`}>
      <div className="header-container">
        <div className="header-logo">
          <Link to="/" className="logo-link">
            <img
              src={new URL('/assets/Logos/shieldLogoblue.png', import.meta.url).href}
              alt="SHIELD Logo"
              className="logo-icon"
            />
          </Link>
        </div>

        <nav className={`nav-menu ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
          <div className={`nav-item ${isActive('/about') ? 'active' : ''}`}>
            <Link to="/about" className="nav-link" onClick={closeMobileMenu}>
              About Us
            </Link>
            {/* <CaretDownIcon size={20} weight="regular" className="dropdown-icon" /> */}
          </div>
          
          <Link 
            to="/podcast" 
            className={`nav-link ${isActive('/podcast') ? 'active' : ''}`}
            onClick={closeMobileMenu}
          >
            Book a Podcast
          </Link>
          
          <Link 
            to="/publications" 
            className={`nav-link ${isActive('/publications') ? 'active' : ''}`}
            onClick={closeMobileMenu}
          >
            Publications
          </Link>
          
          <Link 
            to="/programs" 
            className={`nav-link ${isActive('/programs') ? 'active' : ''}`}
            onClick={closeMobileMenu}
          >
            SHIELD Learn
          </Link>
          
          <Link
            to="/run"
            className={`nav-link ${isActive('/run') ? 'active' : ''}`}
            onClick={closeMobileMenu}
          >
            Run with us
          </Link>

          <button className="btn-donate mobile-menu-donate" onClick={() => { setIsModalOpen(true); closeMobileMenu(); }}>
            Donate
          </button>
        </nav>

        <button className="btn-donate desktop-donate" onClick={() => setIsModalOpen(true)}>
          Donate
        </button>

        <button 
          className="mobile-menu-toggle" 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? <X size={28} weight="bold" /> : <List size={28} weight="bold" />}
        </button>
      </div>
      <DonateModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </header>
  );
};

export default Header;