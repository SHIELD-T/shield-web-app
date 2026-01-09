import React from 'react';
import './run.css';

const RunWithShield: React.FC = () => {
  return (
    <div className="run-with-shield-page-r">
      {/* Hero Section */}
      <section className="hero-section-r">
        <div className="hero-overlay-r">
          <div className="hero-content-r">
            <div className="content-wrapper-r">
              <h1 className="hero-title-r">Run With SHIELD</h1>
              <p className="hero-description-r">
                We're excited to partner with Realbuzz, giving you the chance to support SHIELD while taking part in some of the world's most exciting marathons and running events. By registering for marathons through our partner link, your participation helps SHIELD empower underserved communities through education, innovation, and entrepreneurship. Every step you take brings us closer to building sustainable ventures and driving lasting social impact.
              </p>
            </div>
            <a href="https://www.realbuzz.com/charities/shield-international" target="_blank" rel="noopener noreferrer" className="cta-button-r">Find a Marathon</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RunWithShield;