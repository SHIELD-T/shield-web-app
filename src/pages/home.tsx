// src/pages/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-overlay">
          <div className="container">
            <div className="hero-content">
              <h1>Making a Difference in Our Community</h1>
              <p>
                Join us in creating positive change through sustainable programs, 
                community development, and impactful initiatives that transform lives.
              </p>
              <div className="hero-buttons">
                <Link to="/donate" className="btn btn-primary">
                  Donate Now
                </Link>
                <Link to="/about" className="btn btn-secondary">
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="stats-section">
        <div className="container">
          <h2>Our Impact in Numbers</h2>
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-number">10,000+</div>
              <div className="stat-label">Lives Impacted</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">50+</div>
              <div className="stat-label">Programs Running</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">25</div>
              <div className="stat-label">Communities Served</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">500+</div>
              <div className="stat-label">Volunteers</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about-preview">
        <div className="container">
          <div className="about-content">
            <div className="about-text">
              <h2>Who We Are</h2>
              <p>
                We are a dedicated nonprofit organization committed to creating 
                sustainable change in communities across Kenya. Through our various 
                programs and initiatives, we focus on education, healthcare, 
                environmental conservation, and economic empowerment.
              </p>
              <p>
                Our team works tirelessly to ensure that every project we undertake 
                has a lasting positive impact on the communities we serve. We believe 
                in transparency, accountability, and community-driven solutions.
              </p>
              <Link to="/about" className="btn btn-outline">
                Read Our Full Story
              </Link>
            </div>
            <div className="about-image">
              <div className="image-placeholder">
                <span>🤝</span>
                <p>Community Impact</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="programs-section">
        <div className="container">
          <h2>Our Key Programs</h2>
          <div className="programs-grid">
            <div className="program-card">
              <div className="program-icon">🎓</div>
              <h3>Education Initiative</h3>
              <p>
                Providing quality education resources and support to underserved 
                communities, including scholarship programs and learning materials.
              </p>
            </div>
            <div className="program-card">
              <div className="program-icon">🏥</div>
              <h3>Healthcare Access</h3>
              <p>
                Improving healthcare accessibility through mobile clinics, 
                health awareness campaigns, and medical supply donations.
              </p>
            </div>
            <div className="program-card">
              <div className="program-icon">🌱</div>
              <h3>Environmental Conservation</h3>
              <p>
                Promoting sustainable practices, tree planting initiatives, 
                and environmental education in local communities.
              </p>
            </div>
            <div className="program-card">
              <div className="program-icon">💼</div>
              <h3>Economic Empowerment</h3>
              <p>
                Supporting small businesses, providing microfinance opportunities, 
                and offering skills training for sustainable livelihoods.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Make a Difference?</h2>
            <p>
              Your support can help us continue our mission of creating positive 
              change in communities. Every contribution, no matter the size, makes a difference.
            </p>
            <div className="cta-buttons">
              <Link to="/donate" className="btn btn-primary">
                Make a Donation
              </Link>
              <Link to="/podcast" className="btn btn-secondary">
                Share Your Story
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;