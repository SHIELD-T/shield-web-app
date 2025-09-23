import React from 'react';
import { Link } from 'react-router-dom';
import './AboutSection.css';

const AboutSection: React.FC = () => {
  const stats = [
    { number: '2023', label: 'Founded' },
    { number: '500+', label: 'Youth Empowered' },
    { number: '50+', label: 'Ventures Launched' },
    { number: '10+', label: 'Communities Served' }
  ];


  return (
    <section className="about-section">
      <div className="about-hero">
        <div className="container">
          <div className="about-hero-content-s">
            <div className="about-hero-text">
              <div className="about-badge">Who We Are</div>
              <h2>Empowering Communities Through Innovation</h2>
              <p className="about-lead">
                SHIELD is more than a hub—we're a catalyst for transformation, 
                bridging the innovation gap in underserved communities worldwide.
              </p>
            </div>
            <div className="about-hero-image">
              <img 
                src="https://images.unsplash.com/photo-1695067058684-da5a90013c57?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTAwNDR8MHwxfHNlYXJjaHw1fHx3b3Jrc3BhY2UlMjBpbm5vdmF0aW9uJTIwY29sbGFib3JhdGlvbiUyMG1vZGVybiUyMG9mZmljZXxlbnwwfDB8fHwxNzU2ODExNDg4fDA&ixlib=rb-4.1.0&q=85"
                alt="Modern workspace, innovation hub, collaborative environment, diverse team working - algoleague on Unsplash"
                width="600"
                height="400"
              />
              <div className="about-floating-card">
                <img 
                  src="https://images.unsplash.com/photo-1712294252418-680891540aa8?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTAwNDR8MHwxfHNlYXJjaHwyfHxsaWdodGJ1bGIlMjBpbm5vdmF0aW9uJTIwaWRlYSUyMGNyZWF0aXZpdHl8ZW58MHwyfHx8MTc1NjgxMTQ4OHww&ixlib=rb-4.1.0&q=85"
                  alt="Lightbulb, innovation symbol, creative thinking, bright idea illustration - Jakub Żerdzicki on Unsplash"
                  width="80"
                  height="80"
                />
                <div>
                  <h4>Innovation First</h4>
                  <p>Driving change through creativity</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="about-content-section">
        <div className="container">
          <div className="about-story">
            <div className="about-story-text">
              <h3>Our Story</h3>
              <p>
                The Social Hub for Innovation, Entrepreneurship, Leadership and Design-Thinking (SHIELD) 
                was founded in 2023 with a bold vision: to democratize access to innovation resources 
                and create thriving entrepreneurial ecosystems in underserved communities.
              </p>
              <p>
                We recognized that talent is universal, but opportunity is not. While innovation hubs 
                flourish in affluent urban centers and universities, countless brilliant minds in 
                marginalized communities lack the resources, networks, and platforms to transform 
                their ideas into reality.
              </p>
              <Link to="/about" className="btn btn-primary">
                Read Our Full Story
              </Link>
            </div>
            
            <div className="about-stats">
              {stats.map((stat, index) => (
                <div key={index} className="stat-item">
                  <div className="stat-number">{stat.number}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;