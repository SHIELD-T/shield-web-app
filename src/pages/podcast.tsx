// src/pages/Podcast.jsx
import "./Podcast.css";
import { resolveUrl } from "../utils/assetUtils";

const Podcast = () => {
  return (
    <div className="podcast">
      {/* Hero Section */}
      <section className="podcast-hero">
        <div className="container">
          <div className="hero-content">
            <h1>Choose Your Plan</h1>
            <p className="hero-subtitle">Elevate Your Voice, Empower Your Brand</p>
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="pricing-section">
        <div className="container">
          <div className="pricing-grid">
            {/* Story Chap Chap Plan */}
            <div className="pricing-card">
              <div className="plan-header">
                <h3>Story chap chap</h3>
                <div className="price">
                  <span className="currency">KSH</span>
                  <span className="amount">5000</span>
                  <span className="period">/Episode</span>
                </div>
              </div>
              <div className="plan-features">
                <div className="feature">1hr session</div>
                <div className="feature">Standard 2-day post-production and delivery</div>
                <div className="feature">Complimentary content reviews</div>
                <div className="feature">1 free social media snippet to promote your episode</div>
              </div>
            </div>

            {/* Story Flow Plan */}
            <div className="pricing-card featured">
              <div className="plan-header">
                <h3>Story flow</h3>
                <div className="price">
                  <span className="currency">KSH</span>
                  <span className="amount">10000</span>
                  <span className="period">/Episode</span>
                </div>
              </div>
              <div className="plan-features">
                <div className="feature">1-hour recording session</div>
                <div className="feature">Host up to 3 guests</div>
                <div className="feature">Comprehensive service, including recording, mixing, and mastering</div>
                <div className="feature">Distribution to all major global platforms</div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Full Podcast Section */}
      <section className="full-podcast-section">
        <div className="container">
          <div className="full-podcast-content">
            <div className="podcast-illustration">
              <img src={resolveUrl("assets/images/68.jpg")} alt="Podcast Illustration" className="podcast-image" />
            </div>
            <div className="podcast-info">
              <div className="tag">Unleash Your Voice</div>
              <h2>Full Podcast to Resonate Our Services</h2>
              <p>
                Dive into the world of professional podcasting with our comprehensive services. 
                Whether you're a seasoned podcaster or just starting out, we provide everything you need to create a show that stands out. 
                From state-of-the-art recording facilities to expert post-production, we ensure your voice is heard loud and clear.
              </p>
              <p>
                Our team is dedicated to helping you craft a podcast that resonates with your audience and amplifies your message. 
                Let us handle the technical details while you focus on sharing your story with the world.
              </p>
            </div>
          </div>
        </div>
      </section>

.

      {/* Why Choose Us Section */}
      <section className="why-choose-section">
        <div className="container">
          <div className="why-choose-content">
            <div className="why-choose-text">
              <h2>Why choose us?</h2>
            </div>
            <div className="features-list">
              <div className="feature-item">
                <h4>State-of-the-Art Facilities</h4>
                <p>Our world-class studio is equipped with cutting-edge technology to ensure pristine sound quality.</p>
              </div>
              <div className="feature-item">
                <h4>Expert Sound Engineering</h4>
                <p>Our skilled engineers will guide you through every step of the recording process, from setup to post-production.</p>
              </div>
              <div className="feature-item">
                <h4>Creative Consultation</h4>
                <p>Need help crafting your podcast concept or refining your storytelling? Our experienced team can provide valuable insights and strategies.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Start Your Podcast Journey?</h2>
            <p>
              Let's bring your story to life with professional recording and production services. 
              Contact us today to book your session.
            </p>
            {/* <div className="cta-buttons">
              <Link to="/about" className="btn btn-primary">
                Contact Us
              </Link>
              <Link to="/" className="btn btn-secondary">
                Learn More
              </Link>
            </div> */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Podcast;