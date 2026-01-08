import React from 'react';
import './run.css';

const RunWithShield: React.FC = () => {
  return (
    <div className="run-with-shield-page">
      {/* Header/Navigation */}
      <header className="header">
        <div className="nav-container">
          <div className="logo-container">
            <div className="logo-image"></div>
            <div className="logo-text">SHIELD</div>
          </div>

          <nav className="nav-links">
            <div className="nav-item-with-arrow">
              <span className="nav-text">About Us</span>
              <div className="arrow-down"></div>
            </div>
            <span className="nav-text">Book a Podcast</span>
            <span className="nav-text">Publications</span>
            <span className="nav-text nav-bold">SHIELD Learn</span>
            <span className="nav-text nav-blue">Run with SHIELD</span>
          </nav>

          <button className="donate-button">Donate</button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-overlay">
          <div className="hero-content">
            <div className="content-wrapper">
              <h1 className="hero-title">Run With SHIELD</h1>
              <p className="hero-description">
                We're excited to partner with Realbuzz, giving you the chance to support SHIELD while taking part in some of the world's most exciting marathons and running events. By registering for marathons through our partner link, your participation helps SHIELD empower underserved communities through education, innovation, and entrepreneurship. Every step you take brings us closer to building sustainable ventures and driving lasting social impact.
              </p>
            </div>
            <button className="cta-button">Find a Marathon</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RunWithShield;