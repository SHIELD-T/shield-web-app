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
              <a href="https://www.realbuzz.com/charities/shield-international" target="_blank"  className="donate-btn donate-btn-primary">
                Find a Marathon
              </a>
            </div>
            <div className="run-cause-image">
              <img 
                src="public\assets\images\marathon\marathon.jpg" 
                alt="Marathon runner supporting charity cause"
                style={{width: '100%', height: '100%', objectFit: 'cover', borderRadius: '12px'}}
              />
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
                src="https://images.unsplash.com/photo-1544717297-fa95b6ee9643?w=400&h=250&fit=crop&crop=center" 
                alt="Children participating in Waweza Foundation workshop"
                style={{width: '100%', height: '200px', objectFit: 'cover', borderRadius: '8px'}}
              />
              <h3>Waweza Foundation</h3>
              <p>
                Workshops aimed to inspire children through engaging activities that foster 
                critical thinking and communication skills. We focus on hands-on projects 
                that encourage teamwork and innovation, helping children to not only learn 
                but also to apply their knowledge in real-world scenarios.
              </p>
              <div className="story-stats">
                <span className="story-stat">50+ children engaged</span>
                <span className="story-stat">Critical thinking skills developed</span>
              </div>
            </div>

            <div className="impact-story-card">
              <img 
                src="https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=400&h=250&fit=crop&crop=center" 
                alt="TDP Fellowship Program software development session"
                style={{width: '100%', height: '200px', objectFit: 'cover', borderRadius: '8px'}}
              />
              <h3>TDP Fellowship Program</h3>
              <p>
                We began the foundational software development program on the 10th of June where 
                our goal is to create at least 5 tech-enabled tourism ventures. The innovation 
                hub is open from 8:00 AM EAT up until 7:00 PM EAT with instructor-based coding 
                sessions from 9:00 AM EAT up until 2:00 PM EAT.
              </p>
              <div className="story-stats">
                <span className="story-stat">5 tech ventures planned</span>
                <span className="story-stat">Daily coding sessions</span>
              </div>
            </div>

            <div className="impact-story-card">
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=250&fit=crop&crop=center" 
                alt="Digital transformation workshop with students"
                style={{width: '100%', height: '200px', objectFit: 'cover', borderRadius: '8px'}}
              />
              <h3>Digital Transformation</h3>
              <p>
                Through interactive sessions, learners develop innovative thinking and learn 
                how to effectively present their ideas. Our curriculum includes exercises in 
                design thinking, collaborative projects, and public speaking, ensuring that 
                each participant gains a comprehensive skill set.
              </p>
              <div className="story-stats">
                <span className="story-stat">Design thinking workshops</span>
                <span className="story-stat">Public speaking skills</span>
              </div>
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
              <h3>Equipment & Infrastructure</h3>
              <p>
                Purchase and maintenance of equipment, setting up of innovation hub 
                facilities and providing initial startup capital grants to support student ventures.
              </p>
              <img 
                src="https://unsplash.com/photos/a-room-filled-with-lots-of-computer-monitors-Y6hwl3U1oiU?w=400&h=200&fit=crop&crop=center" 
                alt="Modern tech equipment and computers"
                style={{width: '100%', height: '150px', objectFit: 'cover', borderRadius: '8px', marginTop: '15px'}}
              />
            </div>

            <div className="impact-area-card">
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
              <a href="https://www.paypal.com/donate/?hosted_button_id=YOUR_BUTTON_ID_25" target="_blank" rel="noopener noreferrer" className="donate-btn donate-btn-primary">
                Donate $25 via PayPal
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
              <a href="https://www.paypal.com/donate/?hosted_button_id=YOUR_BUTTON_ID_100" target="_blank" rel="noopener noreferrer" className="donate-btn donate-btn-primary">
                Donate $100 via PayPal
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
              <a href="https://www.paypal.com/donate/?hosted_button_id=YOUR_BUTTON_ID_500" target="_blank" rel="noopener noreferrer" className="donate-btn donate-btn-primary">
                Donate $500 via PayPal
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
              <a href="https://www.paypal.com/donate/?hosted_button_id=YOUR_CUSTOM_BUTTON_ID" target="_blank" rel="noopener noreferrer" className="donate-btn donate-btn-secondary">
                Donate via PayPal
              </a>
            </div>
            <div style={{marginTop: '20px', textAlign: 'center'}}>
              <p style={{fontSize: '0.9rem', color: '#666', marginBottom: '10px'}}>
                Need other payment methods? We accept bank transfers, checks, and cryptocurrency.
              </p>
              <a 
                href="mailto:info@shieldintl.org?subject=Alternative Payment Methods Inquiry&body=Hello SHIELD Team,%0D%0A%0D%0AI would like to inquire about alternative payment methods for making a donation. Please provide information about available options.%0D%0A%0D%0AThank you!" 
                className="donate-btn donate-btn-outline"
                style={{fontSize: '0.9rem', padding: '8px 16px'}}
              >
                Other Payment Methods
              </a>
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
                <a href="https://www.paypal.com/donate/?hosted_button_id=YOUR_MONTHLY_BUTTON_ID" target="_blank" rel="noopener noreferrer" className="donate-btn donate-btn-primary">
                  Start Monthly Giving via PayPal
                </a>
                <a href="mailto:info@shieldintl.org?subject=Impact Reports Request&body=Hello SHIELD Team,%0D%0A%0D%0AI would like to request access to your latest impact reports and program updates.%0D%0A%0D%0AThank you!" className="donate-btn donate-btn-outline">
                  Request Impact Reports
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
             
            </div>

            <div className="giving-option-card">
              <div className="giving-icon">🤝</div>
              <h3>Corporate Partnerships</h3>
              <p>
                Partner with us to create employee engagement programs and 
                corporate social responsibility initiatives.
              </p>
              
            </div>

            <div className="giving-option-card">
              <div className="giving-icon">⏰</div>
              <h3>Volunteer Your Time</h3>
              <p>
                Share your skills and expertise by volunteering as a mentor, 
                workshop facilitator, or program supporter.
              </p>
             
            </div>

            <div className="giving-option-card">
              <div className="giving-icon">🎁</div>
              <h3>In-Kind Donations</h3>
              <p>
                Donate equipment, materials, or services that directly support 
                our programs and infrastructure needs.
              </p>
            
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
                <a href="https://shieldintl.org/wp-content/uploads/2025/04/SHIELD-2024-ANNUAL-REPORT-2.pdf" target="_blank" rel="noopener noreferrer" className="donate-btn donate-btn-primary">
                  View 2024 Annual Report
                </a>
                <a href="mailto:info@shieldintl.org?subject=Financial Report Request&body=Hello SHIELD Team,%0D%0A%0D%0AI would like to request your latest financial report and transparency documentation.%0D%0A%0D%0AThank you!" className="donate-btn donate-btn-outline">
                  Request Financial Report
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
      {/* <section className="donor-recognition-section">
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
      </section> */}

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
              <a href="https://www.paypal.com/donate/?hosted_button_id=YOUR_GENERAL_BUTTON_ID" target="_blank" rel="noopener noreferrer" className="donate-btn donate-btn-primary">
                Make a One-Time Donation via PayPal
              </a>
              <a href="mailto:info@shieldintl.org?subject=Volunteer Inquiry&body=Hello SHIELD Team,%0D%0A%0D%0AI am interested in volunteering with SHIELD. Please provide information about available volunteer opportunities.%0D%0A%0D%0AThank you!" className="donate-btn donate-btn-outline">
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