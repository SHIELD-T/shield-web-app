import { useState } from "react";
import "./about.css";
import { resolveUrl } from "../utils/assetUtils";
import DonateModal from "./donatemodal";

const About = () => {
  const [sectorIndex, setSectorIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const sectors = [
    {
      title: "EDUCATION",
      description: "Education is the foundation for building skills, knowledge, and opportunities. It empowers individuals to break the cycle of poverty and create better futures for themselves and their communities.",
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&auto=format&fit=crop"
    },
    {
      title: "SMEs",
      description: "SMEs are the backbone of economic growth and job creation, especially in underserved communities. They drive innovation, create employment opportunities, and stimulate local economies by fostering entrepreneurship. However, many SMEs in these areas face challenges such as limited access to funding, training, and markets.",
      image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&auto=format&fit=crop"
    },
    {
      title: "CIRCULAR ECONOMY",
      description: "A circular economy focuses on reducing waste and maximizing resource efficiency. It promotes sustainable production and consumption patterns that benefit both communities and the environment.",
      image: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=800&auto=format&fit=crop"
    },
    {
      title: "TOURISM",
      description: "Tourism creates economic opportunities while preserving cultural heritage. It provides employment, promotes local businesses, and showcases the unique traditions and landscapes of communities.",
      image: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=800&auto=format&fit=crop"
    },
    {
      title: "ENVIRONMENT",
      description: "Environmental sustainability ensures the health and wellbeing of communities. It focuses on conservation, climate action, and responsible resource management for future generations.",
      image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=800&auto=format&fit=crop"
    }
  ];

  const nextSector = () => {
    setSectorIndex((prev) => (prev + 1) % sectors.length);
  };

  const prevSector = () => {
    setSectorIndex((prev) => (prev - 1 + sectors.length) % sectors.length);
  };

  // Get 3 visible sectors
  const getVisibleSectors = () => {
    const visible = [];
    for (let i = 0; i < 3; i++) {
      const index = (sectorIndex + i) % sectors.length;
      visible.push(sectors[index]);
    }
    return visible;
  };

  const visibleSectors = getVisibleSectors();
  const currentSector = sectors[sectorIndex];

  return (
    <div className="about">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="container">
          <div className="about-hero-content">
            <h1>What we do</h1>
            <p>
              SHIELD provides innovation spaces and combines digital transformation, Design-thinking, research, social venture building expertise to support youths from underserved communities to build social impact ventures that lead to a more inclusive, equitable, and resilient future for underserved people. These ventures have the potential to create employment opportunities and address critical socio-economic issues in their communities.
            </p>
          </div>
          <div className="about-hero-image">
            <img src={resolveUrl("assets/images/stud.JPG")} alt="SHIELD Team" />
          </div>
        </div>
      </section>

      {/* How We Do It Section */}
      <section className="how-we-do">
        <div className="container">
          <h2>How we do It</h2>
          
          <div className="how-grid">
            <div className="how-item">
              <div className="how-icon">
                <svg width="70" height="70" viewBox="0 0 70 70" fill="none">
                  <circle cx="35" cy="35" r="30" fill="currentColor" opacity="0.1"/>
                  <path d="M35 20 L45 30 L35 40 L25 30 Z" fill="currentColor"/>
                </svg>
              </div>
              <h3>Mindset Change</h3>
              <p>
                We help our beneficiaries in underserved communities adopt entrepreneurial mindsets and regenerative culture of money. This way they can abandon radicalized ideologies, over-reliance on handouts, donations and instead focus on income-generating activities for self-dependency and impact generation in their communities.
              </p>
            </div>

            <div className="how-item">
              <div className="how-icon">
                <svg width="70" height="70" viewBox="0 0 70 70" fill="none">
                  <rect x="15" y="20" width="40" height="35" rx="4" fill="currentColor" opacity="0.1"/>
                  <path d="M25 30 L45 30 M25 40 L45 40 M25 50 L40 50" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </div>
              <h3>Skillset Development</h3>
              <p>
                We help our beneficiaries in underserved communities adopt entrepreneurial mindsets and regenerative culture of money. This way they can abandon radicalized ideologies, over-reliance on handouts, donations and instead focus on income-generating activities for self-dependency and impact generation in their communities.
              </p>
            </div>

            <div className="how-item">
              <div className="how-icon">
                <svg width="70" height="70" viewBox="0 0 70 70" fill="none">
                  <circle cx="35" cy="30" r="12" fill="currentColor" opacity="0.1"/>
                  <rect x="20" y="45" width="30" height="15" rx="3" fill="currentColor" opacity="0.1"/>
                </svg>
              </div>
              <h3>We build and scale Social ventures</h3>
              <p>
                We help our beneficiaries in underserved communities adopt entrepreneurial mindsets and regenerative culture of money. This way they can abandon radicalized ideologies, over-reliance on handouts, donations and instead focus on income-generating activities for self-dependency and impact generation in their communities.
              </p>
            </div>

            <div className="how-item">
              <div className="how-icon">
                <svg width="70" height="70" viewBox="0 0 70 70" fill="none">
                  <circle cx="25" cy="35" r="8" fill="currentColor" opacity="0.1"/>
                  <circle cx="45" cy="35" r="8" fill="currentColor" opacity="0.1"/>
                  <circle cx="35" cy="50" r="8" fill="currentColor" opacity="0.1"/>
                  <path d="M25 35 L45 35 M30 42 L40 42" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </div>
              <h3>We build innovation ecosystems in underserved communities</h3>
              <p>
                We help our beneficiaries in underserved communities adopt entrepreneurial mindsets and regenerative culture of money. This way they can abandon radicalized ideologies, over-reliance on handouts, donations and instead focus on income-generating activities for self-dependency and impact generation in their communities.
              </p>
            </div>

            <div className="how-item">
              <div className="how-icon">
                <svg width="70" height="70" viewBox="0 0 70 70" fill="none">
                  <rect x="15" y="25" width="15" height="30" rx="2" fill="currentColor" opacity="0.1"/>
                  <rect x="35" y="20" width="15" height="35" rx="2" fill="currentColor" opacity="0.2"/>
                  <rect x="55" y="30" width="15" height="25" rx="2" fill="currentColor" opacity="0.1"/>
                </svg>
              </div>
              <h3>Employment Creation</h3>
              <p>
                We help our beneficiaries in underserved communities adopt entrepreneurial mindsets and regenerative culture of money. This way they can abandon radicalized ideologies, over-reliance on handouts, donations and instead focus on income-generating activities for self-dependency and impact generation in their communities.
              </p>
            </div>

            <div className="how-item">
              <div className="how-icon">
                <svg width="70" height="70" viewBox="0 0 70 70" fill="none">
                  <circle cx="35" cy="35" r="25" fill="currentColor" opacity="0.1"/>
                  <path d="M28 35 L33 40 L42 30" stroke="currentColor" strokeWidth="2.5" fill="none"/>
                </svg>
              </div>
              <h3>We research and advise</h3>
              <p>
                We help our beneficiaries in underserved communities adopt entrepreneurial mindsets and regenerative culture of money. This way they can abandon radicalized ideologies, over-reliance on handouts, donations and instead focus on income-generating activities for self-dependency and impact generation in their communities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section className="methodology">
        <div className="container">
          <div className="methodology-content">
            <div className="methodology-text">
              <h2>Our methodology</h2>
              <p>
                Our holistic approach incorporates technical and entrepreneurial capacity building training programs combined with multi-stakeholder community engagement to bring in the right support for our beneficiaries to thrive and build solutions to solve social problems in underserved communities. Learners undergo three main programs aimed at upskilling them after which they join the SHIELD community to access the right network and additional resources to become capable social impact champions in their communities.
              </p>
            </div>
            <div className="methodology-image">
              <img src="https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&auto=format&fit=crop" alt="Methodology" />
            </div>
          </div>
        </div>
      </section>
      
      <section className="sectors">
        <div className="container">
          <h2>Sectors of Focus</h2>
          
          <div className="sectors-carousel">
            <button className="sector-nav prev" onClick={prevSector} aria-label="Previous sector">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                <path d="M20 8 L12 16 L20 24" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
              </svg>
            </button>

            <div className="sectors-display">
              {visibleSectors.map((sector, idx) => (
                <div key={idx} className="sector-card">
                  <img src={sector.image} alt={sector.title} />
                  <div className="sector-overlay">
                    <h3>{sector.title}</h3>
                  </div>
                </div>
              ))}

              <div className="sector-info">
                <h3>{currentSector.title}</h3>
                <p>{currentSector.description}</p>
              </div>
            </div>

            <button className="sector-nav next" onClick={nextSector} aria-label="Next sector">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                <path d="M12 8 L20 16 L12 24" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* The Team */}
      <section className="team-section">
        <div className="container">
          <h2>The Team</h2>
          
          <div className="team-grid">
            <div className="team-member">
              <div className="team-image">
                <img src={resolveUrl("assets/Founders/James.jpg")} alt="James Mugambi" />
              </div>
              <h3>James Mugambi</h3>
              <p className="team-role">Co-founder & CEO</p>
            </div>

            <div className="team-member">
              <div className="team-image">
              <img src={resolveUrl("assets/Founders/Eric.jpg")} alt="David Kiai" />
              </div>
              <h3>Eric Muriithi</h3>
              <p className="team-role">Co-founder & CTO</p>
            </div>

            <div className="team-member">
              <div className="team-image">
                <img src={resolveUrl("assets/Founders/David.jpg")} alt="David Kiai" />
              </div>
              <h3>David Kiai</h3>
              <p className="team-role">Co-founder & CIO</p>
            </div>

            <div className="team-member">
              <div className="team-image">
                <img src={resolveUrl("assets/Founders/Eden.jpg")} alt="Eden Nasiali" />
              </div>
              <h3>Eden Nasiali</h3>
              <p className="team-role">Operations Manager</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Impact */}
      <section className="our-impact">
        <div className="container">
          <h2>Our Impact</h2>
          
          <div className="impact-stats">
            <div className="impact-stat">
              <div className="stat-number">200+</div>
              <div className="stat-label">Social leaders trained</div>
            </div>
            <div className="impact-stat">
              <div className="stat-number">5+</div>
              <div className="stat-label">Social ventures created</div>
            </div>
            <div className="impact-stat">
              <div className="stat-number">50+</div>
              <div className="stat-label">Jobs created</div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Future */}
      <section className="our-future">
        <div className="container">
          <div className="future-content">
            <div className="future-text">
              <span className="future-label">Our Future</span>
              <h2>By 2030<br />we aspire to</h2>
              <p>
                Looking ahead, our vision is to continuously expand our impact, fostering innovation, empowering communities, and driving sustainable growth through cutting-edge programs and collaborative initiatives.
              </p>
              
              <div className="future-goals">
                <div className="goal-item">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span>Trained over 50,000 youths in kenya</span>
                </div>
                <div className="goal-item">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <polyline points="22 4 12 14.01 9 11.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span>Launched 500 social ventures</span>
                </div>
                <div className="goal-item">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <rect x="2" y="7" width="20" height="14" rx="2" ry="2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span>Created 100,000 jobs opportunities</span>
                </div>
              </div>
            </div>
            
            <div className="future-image">
              <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&auto=format&fit=crop" alt="Our Future Vision" />
            </div>
          </div>
        </div>
      </section>

      {/* Our Partners */}
      <section className="our-partners">
        <div className="container">
          <h2>Our Partners</h2>
          <div className="logos-wrapper">
            <div className="logos-scroll">
              <img src="./assets/images/Partners/p1.jpg" alt="Partner 1" className="partner-logo" />
              <img src="./assets/images/Partners/p10.png" alt="Partner 2" className="partner-logo" />
              <img src="./assets/images/Partners/p11.png" alt="Partner 3" className="partner-logo" />
              <img src="./assets/images/Partners/p1hp.png" alt="Partner 4" className="partner-logo" />
              <img src="./assets/images/Partners/p2.png" alt="Partner 5" className="partner-logo" />
              <img src="./assets/images/Partners/p4.jpg" alt="Partner 6" className="partner-logo" />
              <img src="./assets/images/Partners/p44.png" alt="Partner 7" className="partner-logo" />
              <img src="./assets/images/Partners/p9.png" alt="Partner 8" className="partner-logo" />
              <img src="./assets/images/Partners/partner3.png" alt="Partner 9" className="partner-logo" />
              <img src="./assets/images/Partners/p1.jpg" alt="Partner 1" className="partner-logo" />
              <img src="./assets/images/Partners/p10.png" alt="Partner 2" className="partner-logo" />
              <img src="./assets/images/Partners/p11.png" alt="Partner 3" className="partner-logo" />
              <img src="./assets/images/Partners/p1hp.png" alt="Partner 4" className="partner-logo" />
              <img src="./assets/images/Partners/p2.png" alt="Partner 5" className="partner-logo" />
              <img src="./assets/images/Partners/p4.jpg" alt="Partner 6" className="partner-logo" />
              <img src="./assets/images/Partners/p44.png" alt="Partner 7" className="partner-logo" />
              <img src="./assets/images/Partners/p9.png" alt="Partner 8" className="partner-logo" />
              <img src="./assets/images/Partners/partner3.png" alt="Partner 9" className="partner-logo" />
            </div>
          </div>
        </div>
      </section>

      {/* Donate CTA */}
      <section className="donate-cta">
        <div className="container">
          <h3>Help us support our community</h3>
          <button onClick={() => setIsModalOpen(true)} className="btn btn-primary">
            Donate
          </button>
        </div>
      </section>

      <DonateModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};

export default About;