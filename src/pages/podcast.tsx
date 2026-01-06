import "./podcast.css";

const Podcast = () => {
  return (
    <div className="podcast">
      {/* Hero Section */}
      <section className="podcast-hero">
        <div className="container">
          <h1>Full Podcast to Resonate our services</h1>
          <p className="hero-subtitle">Let us Talk</p>
          
          <div className="hero-cards">
            {/* Left Card - Book a Podcast */}
            <div className="podcast-card blue-card">
              <div className="card-pattern"></div>
              <div className="card-content">
                <span className="card-label">SHIELD Podcast</span>
                <h2>Book a Podcast</h2>
                <p>Our world-class studio is equipped with cutting-edge technology to ensure pristine sound quality.</p>
                <button className="book-btn">Book a podcast</button>
                <div className="host-avatars">
                  <div className="avatar"></div>
                  <div className="avatar"></div>
                  <div className="avatar"></div>
                </div>
              </div>
            </div>

            {/* Right Card - Podcast Player */}
            <div className="podcast-card black-card">
              <div className="card-pattern-dark"></div>
              <div className="podcast-image">
                <img src="https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=400&auto=format&fit=crop" alt="Podcast Hosts" />
              </div>
              <div className="player-card">
                <div className="player-info">
                  <h4>The Thought of me</h4>
                  <p>32 episodes · 5148 points</p>
                </div>
                <div className="player-controls">
                  <button className="control-btn">◀</button>
                  <button className="control-btn play-btn">●</button>
                  <button className="control-btn">▶</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="why-choose">
        <div className="container">
          <h2>Why Choose us</h2>
          <div className="why-content">
            <p className="why-text">
              <strong>Our world-class studio is equipped with cutting-edge technology to ensure pristine sound quality.</strong> Our skilled engineers will guide you through every step of the recording process, from setup to post-production. Need help crafting your podcast concept or refining your storytelling? Our experienced team can provide valuable insights and strategies.
            </p>
            <div className="why-image">
              <img src="https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=300&auto=format&fit=crop" alt="Recording session" />
            </div>
          </div>
        </div>
      </section>

      {/* Choose Your Plans */}
      <section className="plans-section">
        <div className="container">
          <div className="plans-layout">
            <div className="plans-heading">
              <h2>Choose Your Plans</h2>
            </div>
            
            <div className="plans-grid">
              {/* Story Chap Chap Plan */}
              <div className="plan-card">
                <div className="plan-image">
                  <img src="https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=400&auto=format&fit=crop" alt="Story Chap Chap" />
                </div>
                <h3>Story Chap Chap</h3>
                <div className="plan-price">
                  <span className="currency">KSH</span>
                  <span className="amount">5,000</span>
                  <span className="period">/Episode</span>
                </div>
                <ul className="plan-features">
                  <li>✓ 1hr session</li>
                  <li>✓ Standard 2-day post-production and delivery</li>
                  <li>✓ Complimentary content reviews</li>
                  <li>✓ 1 free social media snippet to promote your episode</li>
                </ul>
                <button className="plan-btn">Get It</button>
              </div>

              {/* Story Flow Plan */}
              <div className="plan-card">
                <div className="plan-image">
                  <img src="https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=400&auto=format&fit=crop" alt="Story Flow" />
                </div>
                <h3>Story Flow</h3>
                <div className="plan-price">
                  <span className="currency">KSH</span>
                  <span className="amount">10,000</span>
                  <span className="period">/Episode</span>
                </div>
                <ul className="plan-features">
                  <li>✓ 1hr session</li>
                  <li>✓ Standard 2-day post-production and delivery</li>
                  <li>✓ Complimentary content reviews</li>
                  <li>✓ 1 free social media snippet to promote your episode</li>
                </ul>
                <button className="plan-btn">Get It</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted By */}
      <section className="trusted-by">
        <div className="container">
          <h2>Trusted by Many</h2>
          <div className="logos-scroll">
            <div className="logo-item">
              <div className="logo-icon"></div>
              <span>Hurupay</span>
            </div>
            <div className="logo-item">
              <div className="logo-icon"></div>
              <span>Hurupay</span>
            </div>
            <div className="logo-item">
              <div className="logo-icon"></div>
              <span>Hurupay</span>
            </div>
            <div className="logo-item">
              <div className="logo-icon"></div>
              <span>Hurupay</span>
            </div>
            <div className="logo-item">
              <div className="logo-icon"></div>
              <span>Hurupay</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Podcast;