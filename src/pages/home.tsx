// src/pages/Home.jsx
import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import BlogSection from "../components/BlogSection";
import "./home.css";

const Home = () => {
  const [eventScrollIndex, setEventScrollIndex] = useState(0);
  const [blogScrollIndex, setBlogScrollIndex] = useState(0);
  const eventsGridRef = useRef<HTMLDivElement>(null);
  const blogGridRef = useRef<HTMLDivElement>(null);

  const scrollEvents = (direction: 'left' | 'right') => {
    const container = eventsGridRef.current;
    if (!container) return;
    
    const cardWidth = 330; // card width + gap
    const maxScroll = 4; // total cards
    
    if (direction === 'left' && eventScrollIndex > 0) {
      setEventScrollIndex(eventScrollIndex - 1);
      container.scrollTo({
        left: (eventScrollIndex - 1) * cardWidth,
        behavior: 'smooth'
      });
    } else if (direction === 'right' && eventScrollIndex < maxScroll - 1) {
      setEventScrollIndex(eventScrollIndex + 1);
      container.scrollTo({
        left: (eventScrollIndex + 1) * cardWidth,
        behavior: 'smooth'
      });
    }
  };

  const scrollBlogs = (direction: 'left' | 'right') => {
    const container = blogGridRef.current;
    if (!container) return;
    
    const cardWidth = 330; // card width + gap
    const maxScroll = 4; // total cards
    
    if (direction === 'left' && blogScrollIndex > 0) {
      setBlogScrollIndex(blogScrollIndex - 1);
      container.scrollTo({
        left: (blogScrollIndex - 1) * cardWidth,
        behavior: 'smooth'
      });
    } else if (direction === 'right' && blogScrollIndex < maxScroll - 1) {
      setBlogScrollIndex(blogScrollIndex + 1);
      container.scrollTo({
        left: (blogScrollIndex + 1) * cardWidth,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-overlay">
          <div className="container">
            <div className="hero-content">
              <h1>Making a Difference in Our Community</h1>
              <p>
                Be part of a movement empowering underserved youth to innovate,
                build enterprises, and drive lasting change in their
                communities.
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

      {/* About Section */}
      <section className="about-preview">
        <div className="container">
          <div className="about-content">
            <div className="about-text">
              <h2>Who We Are</h2>
              <p>
                The Social Hub for Innovation, Entrepreneurship, Leadership and
                Design-Thinking (SHIELD) is a non-profit social innovation and
                technology hub founded in 2023 to tackle unemployment in
                underserved communities. We empower youth, gender minorities,
                persons with disabilities, and other marginalized groups to
                develop entrepreneurial and digital skills, launch social
                ventures, and access employment opportunities.
              </p>
              <p>
                SHIELD was created to bridge the gap in innovation resources,
                which are often concentrated in universities and affluent urban
                areas, leaving underserved youth behind. By building hubs within
                these communities, we enable young people to learn, collaborate,
                and create impactful solutions to local social challenges,
                driving inclusive socio-economic growth.
              </p>
              <Link to="/about" className="btn btn-outline">
                Read Our Full Story
              </Link>
            </div>
            <div className="h-about-image">
              <div className="h-image-placeholder"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Why SHIELD is Essential Section */}
      <section className="why-shield-section">
        <div className="container">
          <div className="why-shield-content">
            <div className="why-shield-header">
              <h2>Why SHIELD is Essential</h2>
              <p className="section-subtitle">
                Breaking the cycle of unemployment in underserved communities requires more than just skills training
              </p>
            </div>
            
            <div className="challenges-grid">
              <div className="challenge-item">
                <div className="challenge-icon">📊</div>
                <h3>Saturated Job Market</h3>
                <p>
                  Even with digital skills, youth face a competitive job market where traditional employment opportunities are limited. Many skilled individuals remain unemployed due to lack of connections and opportunities.
                </p>
              </div>
              
              <div className="challenge-item">
                <div className="challenge-icon">🔗</div>
                <h3>Missing Networks</h3>
                <p>
                  Underserved communities lack access to professional networks, mentorship, and industry connections that are crucial for career advancement and entrepreneurial success.
                </p>
              </div>
              
              <div className="challenge-item">
                <div className="challenge-icon">💡</div>
                <h3>Innovation Gap</h3>
                <p>
                  Innovation resources are concentrated in affluent areas and universities, leaving talented youth in underserved communities without platforms to develop and showcase their ideas.
                </p>
              </div>
              
              <div className="challenge-item">
                <div className="challenge-icon">🌱</div>
                <h3>Lack of Entrepreneurial Support</h3>
                <p>
                  While many have business ideas, they lack access to incubation programs, funding opportunities, and the ecosystem needed to transform ideas into sustainable ventures.
                </p>
              </div>
              
              <div className="challenge-item">
                <div className="challenge-icon">🎯</div>
                <h3>Skills-Opportunity Mismatch</h3>
                <p>
                  Training programs often don't align with real market needs or fail to provide pathways to actual employment and entrepreneurial opportunities.
                </p>
              </div>
              
              <div className="challenge-item">
                <div className="challenge-icon">🚪</div>
                <h3>Systemic Barriers</h3>
                <p>
                  Geographic isolation, limited infrastructure, and socioeconomic barriers create additional obstacles that prevent talented individuals from accessing opportunities.
                </p>
              </div>
            </div>
            
            <div className="shield-solution">
              <h3>SHIELD's Approach</h3>
              <p>
                We don't just provide skills training - we create comprehensive ecosystems within underserved communities. Our programs combine design thinking, entrepreneurship development, technical training, and community-based innovation to ensure youth don't just learn skills, but create opportunities for themselves and others.
              </p>
              <Link to="/programs" className="btn btn-primary">
                Explore Our Programs
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Events Section Only */}
      <section className="events-section">
        <div className="container">
          <div className="section-header">
            <h2>Upcoming Events</h2>
            <div className="nav-arrows">
              <button 
                className={`nav-arrow ${eventScrollIndex === 0 ? 'disabled' : ''}`}
                onClick={() => scrollEvents('left')}
                disabled={eventScrollIndex === 0}
              >
                ←
              </button>
              <button 
                className={`nav-arrow ${eventScrollIndex === 3 ? 'disabled' : ''}`}
                onClick={() => scrollEvents('right')}
                disabled={eventScrollIndex === 3}
              >
                →
              </button>
            </div>
          </div>
          <div className="events-scroll-container">
            <div className="events-grid" ref={eventsGridRef}>
              <div className="event-card">
                <div className="event-image" style={{backgroundImage: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'}}>
                  <div className="event-date">
                    <span className="day">15</span>
                    <span className="month">OCT</span>
                  </div>
                </div>
                <div className="event-content">
                  <h3>Design Thinking Workshop</h3>
                  <p className="event-meta">📍 SHIELD Hub • 🕐 9:00 AM</p>
                  <p>Intensive workshop for young entrepreneurs learning human-centered design.</p>
                  <Link to="/events" className="event-link">Learn More →</Link>
                </div>
              </div>
              
              <div className="event-card">
                <div className="event-image" style={{backgroundImage: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'}}>
                  <div className="event-date">
                    <span className="day">22</span>
                    <span className="month">OCT</span>
                  </div>
                </div>
                <div className="event-content">
                  <h3>Innovation Showcase</h3>
                  <p className="event-meta">📍 Virtual Event • 🕐 6:00 PM</p>
                  <p>Program graduates present solutions to community problems.</p>
                  <Link to="/events" className="event-link">Register →</Link>
                </div>
              </div>
              
              <div className="event-card">
                <div className="event-image" style={{backgroundImage: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'}}>
                  <div className="event-date">
                    <span className="day">05</span>
                    <span className="month">NOV</span>
                  </div>
                </div>
                <div className="event-content">
                  <h3>Bootcamp Launch</h3>
                  <p className="event-meta">📍 SHIELD Lab • 🕐 8:00 AM</p>
                  <p>12-week intensive software development program launch.</p>
                  <Link to="/events" className="event-link">Apply →</Link>
                </div>
              </div>
              
              <div className="event-card">
                <div className="event-image" style={{backgroundImage: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)'}}>
                  <div className="event-date">
                    <span className="day">12</span>
                    <span className="month">NOV</span>
                  </div>
                </div>
                <div className="event-content">
                  <h3>Women in Tech Summit</h3>
                  <p className="event-meta">📍 Multi-venue • 🕐 Full Day</p>
                  <p>Empowering women through networking and mentorship.</p>
                  <Link to="/events" className="event-link">Join Us →</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="hcta-section">
        <div className="container">
          <div className="hcta-content">
            <h2>Ready to Make a Difference?</h2>
            <p>
              Your support can help us continue our mission of creating positive
              change in communities. Every contribution, no matter the size,
              makes a difference.
            </p>
            <div className="hcta-buttons">
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

      {/* Blog Section - Now Below CTA */}
      <BlogSection />
    </div>
  );
};

export default Home;