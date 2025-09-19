// src/pages/Donate.tsx
import React from "react";
import "./Donate.css";

const Donate: React.FC = () => {
  return (
    <div className="donate-page">
      {/* Hero Section */}
      <section className="donate-hero">
        <div className="donate-hero-overlay">
          <div className="donate-container">
            <div className="donate-hero-content">
              <h1>Support Our Mission Today</h1>
              <p>
                Your contribution directly impacts underserved communities, empowering 
                youth through education, innovation, and entrepreneurship programs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Run for a Cause Section */}
      <section className="run-cause-section">
        <div className="donate-container">
          <h2>Run for a Cause with SHIELD & Realbuzz</h2>
          <div className="run-cause-content">
            <div className="run-cause-text">
              <p>
                We're excited to partner with <strong>Realbuzz</strong>, giving you the chance to support SHIELD 
                while taking part in some of the world's most exciting marathons and running events.
              </p>
              <p>
                By registering for marathons through our partner link, your participation helps SHIELD empower 
                underserved communities through education, innovation, and entrepreneurship. Every step you take 
                brings us closer to building sustainable ventures and driving lasting social impact.
              </p>
              <a href="/marathon-registration" className="donate-btn donate-btn-primary">
                Find a Marathon
              </a>
            </div>
            <div className="run-cause-image">
              <img 
                src="https://images.unsplash.com/photo-1544717297-fa95b6ee9643?w=600&h=400&fit=crop&crop=center" 
                alt="Marathon runner supporting charity cause"
                style={{width: '100%', height: '300px', objectFit: 'cover', borderRadius: '12px'}}
              />
            </div>
          </div>
        </div>
      </section>

      {/* What We Do With Donations */}
      <section className="donation-impact-section">
        <div className="donate-container">
          <h2>What We Do With Donations</h2>
          <div className="donation-impact-grid">
            <div className="impact-area-card">
              <div className="impact-icon">🏢</div>
              <h3>Hub Operations</h3>
              <p>
                Lease payments, utilities and maintenance of SHIELD's innovation hubs 
                where young entrepreneurs develop their ideas and access resources.
              </p>
              <img 
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=200&fit=crop&crop=center" 
                alt="Modern co-working innovation hub"
                style={{width: '100%', height: '150px', objectFit: 'cover', borderRadius: '8px', marginTop: '15px'}}
              />
            </div>

            <div className="impact-area-card">
              <div className="impact-icon">💻</div>
              <h3>Equipment & Infrastructure</h3>
              <p>
                Purchase and maintenance of equipment, setting up of innovation hub 
                facilities and providing initial startup capital grants to support student ventures.
              </p>
              <img 
                src="https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=200&fit=crop&crop=center" 
                alt="Modern tech equipment and computers"
                style={{width: '100%', height: '150px', objectFit: 'cover', borderRadius: '8px', marginTop: '15px'}}
              />
            </div>

            <div className="impact-area-card">
              <div className="impact-icon">🎓</div>
              <h3>Workshop Programs</h3>
              <p>
                We implement design thinking workshops to help students launch their social ventures. 
                Main costs include hiring workshop facilitators, purchasing design thinking materials, 
                and providing meals and refreshments.
              </p>
              <img 
                src="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=400&h=200&fit=crop&crop=center" 
                alt="Workshop training session with students"
                style={{width: '100%', height: '150px', objectFit: 'cover', borderRadius: '8px', marginTop: '15px'}}
              />
            </div>

            <div className="impact-area-card">
              <div className="impact-icon">📊</div>
              <h3>Platform & Assessment</h3>
              <p>
                Main expenses include tutor stipends, LMS platform maintenance fees, 
                server costs, and comprehensive student assessment programs.
              </p>
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=200&fit=crop&crop=center" 
                alt="Digital learning platform analytics"
                style={{width: '100%', height: '150px', objectFit: 'cover', borderRadius: '8px', marginTop: '15px'}}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Donation Options */}
      <section className="donation-options-section">
        <div className="donate-container">
          <h2>Choose Your Impact Level</h2>
          <div className="donation-options-grid">
            <div className="donation-option-card">
              <div className="donation-amount">$25</div>
              <h3>Workshop Supporter</h3>
              <p>Provides materials and refreshments for one student in our design thinking workshops.</p>
              <ul className="donation-benefits">
                <li>Workshop materials for 1 student</li>
                <li>Digital impact report</li>
                <li>Monthly newsletter updates</li>
              </ul>
              <a href="/donate/25" className="donate-btn donate-btn-primary">
                Donate $25
              </a>
            </div>

            <div className="donation-option-card featured">
              <div className="popular-badge">Most Popular</div>
              <div className="donation-amount">$100</div>
              <h3>Innovation Catalyst</h3>
              <p>Sponsors a complete training program for one entrepreneur, including mentorship and resources.</p>
              <ul className="donation-benefits">
                <li>Full training program for 1 entrepreneur</li>
                <li>Quarterly impact videos</li>
                <li>Exclusive donor events access</li>
                <li>Direct mentee updates</li>
              </ul>
              <a href="/donate/100" className="donate-btn donate-btn-primary">
                Donate $100
              </a>
            </div>

            <div className="donation-option-card">
              <div className="donation-amount">$500</div>
              <h3>Community Builder</h3>
              <p>Funds equipment and infrastructure improvements for our innovation hubs.</p>
              <ul className="donation-benefits">
                <li>Hub equipment upgrades</li>
                <li>Annual impact report</li>
                <li>Hub naming recognition</li>
                <li>Advisory board invitation</li>
              </ul>
              <a href="/donate/500" className="donate-btn donate-btn-primary">
                Donate $500
              </a>
            </div>
          </div>

          <div className="custom-donation">
            <h3>Make a Custom Donation</h3>
            <p>Choose your own amount to support our mission in the way that works best for you.</p>
            <div className="custom-donation-form">
              <input 
                type="number" 
                id="custom-amount"
                name="customAmount"
                placeholder="Enter amount" 
                className="donation-input" 
              />
              <a href="#" className="donate-btn donate-btn-secondary">
                Donate Custom Amount
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stories */}
      <section className="impact-stories-section">
        <div className="donate-container">
          <h2>Your Impact in Action</h2>
          <div className="impact-stories-grid">
            <div className="impact-story-card">
              <img 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=250&fit=crop&crop=center" 
                alt="Young female entrepreneur with laptop"
                style={{width: '100%', height: '200px', objectFit: 'cover', borderRadius: '8px'}}
              />
              <h3>Sarah's Tech Startup</h3>
              <p>
                With support from our software development program, Sarah launched 
                a mobile app that connects local farmers with urban markets, 
                creating sustainable income for 200+ farming families.
              </p>
              <div className="story-stats">
                <span className="story-stat">200+ families impacted</span>
                <span className="story-stat">$50K revenue generated</span>
              </div>
            </div>

            <div className="impact-story-card">
              <img 
                src="https://images.unsplash.com/photo-1509391366360-2e959784a276?w=400&h=250&fit=crop&crop=center" 
                alt="Solar panel installation in rural community"
                style={{width: '100%', height: '200px', objectFit: 'cover', borderRadius: '8px'}}
              />
              <h3>Community Solar Initiative</h3>
              <p>
                Through our entrepreneurship program, a group of young innovators 
                created a community solar project that now provides clean energy 
                to 500 households in rural areas.
              </p>
              <div className="story-stats">
                <span className="story-stat">500 households powered</span>
                <span className="story-stat">30% energy cost reduction</span>
              </div>
            </div>

            <div className="impact-story-card">
              <img 
                src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&h=250&fit=crop&crop=center" 
                alt="Students learning in digital classroom"
                style={{width: '100%', height: '200px', objectFit: 'cover', borderRadius: '8px'}}
              />
              <h3>Digital Learning Centers</h3>
              <p>
                Our donations helped establish 5 digital learning centers, 
                providing computer access and digital literacy training to 
                over 1,000 youth in underserved communities.
              </p>
              <div className="story-stats">
                <span className="story-stat">5 centers established</span>
                <span className="story-stat">1,000+ youth trained</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Monthly Giving */}
      <section className="monthly-giving-section">
        <div className="donate-container">
          <div className="monthly-giving-content">
            <div className="monthly-giving-text">
              <h2>Become a Monthly Champion</h2>
              <p>
                Join our community of monthly donors who provide sustainable funding 
                for our programs. Monthly giving allows us to plan long-term initiatives 
                and provide consistent support to our participants.
              </p>
              <div className="monthly-benefits">
                <h4>Monthly Donor Benefits:</h4>
                <ul>
                  <li>Exclusive quarterly impact reports</li>
                  <li>Priority access to events and workshops</li>
                  <li>Direct connection with program participants</li>
                  <li>Annual appreciation recognition</li>
                  <li>Tax-deductible receipts</li>
                </ul>
              </div>
              <div className="monthly-giving-buttons">
                <a href="/monthly-giving" className="donate-btn donate-btn-primary">
                  Start Monthly Giving
                </a>
                <a href="/impact-reports" className="donate-btn donate-btn-outline">
                  View Impact Reports
                </a>
              </div>
            </div>
            <div className="monthly-giving-image">
              <img 
                src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=600&h=400&fit=crop&crop=center" 
                alt="Community members celebrating impact together"
                style={{width: '100%', height: '300px', objectFit: 'cover', borderRadius: '12px'}}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Other Ways to Give */}
      <section className="other-giving-section">
        <div className="donate-container">
          <h2>Other Ways to Support SHIELD</h2>
          <div className="other-giving-grid">
            <div className="giving-option-card">
              <div className="giving-icon">🏃‍♀️</div>
              <h3>Fundraising Events</h3>
              <p>
                Participate in marathons, charity runs, and community events 
                that raise funds and awareness for our programs.
              </p>
              <a href="/events" className="donate-btn donate-btn-outline">
                View Events
              </a>
            </div>

            <div className="giving-option-card">
              <div className="giving-icon">🤝</div>
              <h3>Corporate Partnerships</h3>
              <p>
                Partner with us to create employee engagement programs and 
                corporate social responsibility initiatives.
              </p>
              <a href="/partnerships" className="donate-btn donate-btn-outline">
                Explore Partnerships
              </a>
            </div>

            <div className="giving-option-card">
              <div className="giving-icon">⏰</div>
              <h3>Volunteer Your Time</h3>
              <p>
                Share your skills and expertise by volunteering as a mentor, 
                workshop facilitator, or program supporter.
              </p>
              <a href="/volunteer" className="donate-btn donate-btn-outline">
                Become a Volunteer
              </a>
            </div>

            <div className="giving-option-card">
              <div className="giving-icon">🎁</div>
              <h3>In-Kind Donations</h3>
              <p>
                Donate equipment, materials, or services that directly support 
                our programs and infrastructure needs.
              </p>
              <a href="/in-kind" className="donate-btn donate-btn-outline">
                Donate In-Kind
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Numbers */}
      <section className="donation-impact-stats-section">
        <div className="donate-container">
          <h2>Your Donation Impact</h2>
          <div className="donation-impact-stats-grid">
            <div className="donation-impact-stat">
              <div className="impact-stat-number">$25</div>
              <div className="impact-stat-label">Trains 1 Youth</div>
              <p>Provides complete workshop materials and training for one participant</p>
            </div>
            <div className="donation-impact-stat">
              <div className="impact-stat-number">$100</div>
              <div className="impact-stat-label">Launches 1 Enterprise</div>
              <p>Covers mentorship and startup capital for one social venture</p>
            </div>
            <div className="donation-impact-stat">
              <div className="impact-stat-number">$500</div>
              <div className="impact-stat-label">Equips 1 Hub</div>
              <p>Provides essential equipment for one innovation hub facility</p>
            </div>
            <div className="donation-impact-stat">
              <div className="impact-stat-number">$1000</div>
              <div className="impact-stat-label">Transforms 1 Community</div>
              <p>Funds a complete program cycle reaching an entire community</p>
            </div>
          </div>
        </div>
      </section>

      {/* Transparency Section */}
      <section className="transparency-section">
        <div className="donate-container">
          <div className="transparency-content">
            <div className="transparency-text">
              <h2>Financial Transparency</h2>
              <p>
                We believe in complete transparency about how your donations are used. 
                Every dollar is carefully allocated to maximize impact and ensure 
                sustainable program delivery.
              </p>
              <div className="funding-breakdown">
                <div className="breakdown-item">
                  <div className="breakdown-percentage">75%</div>
                  <div className="breakdown-label">Direct Program Funding</div>
                </div>
                <div className="breakdown-item">
                  <div className="breakdown-percentage">15%</div>
                  <div className="breakdown-label">Operations & Infrastructure</div>
                </div>
                <div className="breakdown-item">
                  <div className="breakdown-percentage">10%</div>
                  <div className="breakdown-label">Administration & Fundraising</div>
                </div>
              </div>
              <div className="transparency-buttons">
                <a href="/financial-reports" className="donate-btn donate-btn-outline">
                  View Financial Reports
                </a>
                <a href="/annual-report" className="donate-btn donate-btn-outline">
                  Annual Report
                </a>
              </div>
            </div>
            <div className="transparency-image">
              <img 
                src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=400&fit=crop&crop=center" 
                alt="Financial planning and transparency charts"
                style={{width: '100%', height: '300px', objectFit: 'cover', borderRadius: '12px'}}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Donor Recognition */}
      <section className="donor-recognition-section">
        <div className="donate-container">
          <h2>Recognizing Our Champions</h2>
          <div className="donor-tiers-grid">
            <div className="donor-tier-card">
              <div className="tier-icon">🥉</div>
              <h3>Community Supporter</h3>
              <div className="tier-amount">$25 - $99</div>
              <ul className="tier-benefits">
                <li>Quarterly newsletter</li>
                <li>Impact updates</li>
                <li>Tax receipt</li>
              </ul>
            </div>

            <div className="donor-tier-card">
              <div className="tier-icon">🥈</div>
              <h3>Innovation Partner</h3>
              <div className="tier-amount">$100 - $499</div>
              <ul className="tier-benefits">
                <li>All Community Supporter benefits</li>
                <li>Exclusive event invitations</li>
                <li>Program participant updates</li>
                <li>Annual appreciation certificate</li>
              </ul>
            </div>

            <div className="donor-tier-card featured">
              <div className="tier-icon">🥇</div>
              <h3>Change Catalyst</h3>
              <div className="tier-amount">$500+</div>
              <ul className="tier-benefits">
                <li>All Innovation Partner benefits</li>
                <li>Personalized impact reports</li>
                <li>Advisory board consideration</li>
                <li>Hub naming opportunities</li>
                <li>Direct participant mentorship</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="donate-cta-section">
        <div className="donate-container">
          <div className="donate-cta-content">
            <h2>Ready to Make a Difference?</h2>
            <p>
              Every donation, no matter the size, creates ripples of positive change 
              that extend far beyond the initial investment. Join us in building a 
              more equitable and innovative future.
            </p>
            <div className="donate-cta-buttons">
              <a href="/donate/one-time" className="donate-btn donate-btn-primary">
                Make a One-Time Donation
              </a>
              <a href="/donate/monthly" className="donate-btn donate-btn-secondary">
                Start Monthly Giving
              </a>
              <a href="/volunteer" className="donate-btn donate-btn-outline">
                Volunteer Instead
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Donate;