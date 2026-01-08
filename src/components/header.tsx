import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { CaretDownIcon } from '@phosphor-icons/react';
import DonateModal from '../pages/donatemodal';
import './Header.css';

const Header = () => {
  const location = useLocation();
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header className="header">
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

        <nav className="nav-menu">
          <div className={`nav-item ${isActive('/about') ? 'active' : ''}`}>
            <Link to="/about" className="nav-link">
              About Us
            </Link>
            {/* <CaretDownIcon size={20} weight="regular" className="dropdown-icon" /> */}
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
            to="/run"
            className={`nav-link ${isActive('/run') ? 'active' : ''}`}
          >
            Run with us
          </Link>
        </nav>

        <button className="btn-donate" onClick={() => setIsModalOpen(true)}>
          Donate
        </button>
      </div>
      <DonateModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </header>
  );
};

export default Header;