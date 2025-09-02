// src/pages/Home.jsx
import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

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

      {/* Programs Section */}
      <section className="programs-section">
        <div className="container">
          <h2>Our Key Programs</h2>
          <div className="programs-grid">
            <div className="program-card">
              <div className="program-icon">🎓</div>
              <h3>Design Thinking School</h3>
              <p>
                Within the context of the design thinking process, we empower
                youth in underprivileged communities with the skills to
                collaborate and think of themselves as problem solvers and to
                pioneer solutions to the problems they face within their
                community.
              </p>
            </div>
            <div className="program-card">
              <div className="program-icon">🏥</div>
              <h3>SHIELD Entrepreneurship</h3>
              <p>
                This program is tailored at supporting any business especially
                those that are not venture backable. The SMEs will receive
                personalized training and mentorship focused on building their
                capacity to operate the business successfully, unlock financing
                from financial institutions and scale to new levels.
              </p>
            </div>
            <div className="program-card">
              <div className="program-icon">🌱</div>
              <h3>Software Development</h3>
              <p>
                We provide a community for learning and earning opportunities.
                Our certifications prepare you for a career in software
                development, equip you with business acumen to help take your
                idea to the next level.
              </p>
            </div>
            <div className="program-card">
              <div className="program-icon">💼</div>
              <h3>SIDLabs (Research & Development)</h3>
              <p>
                SID is a hub for innovation, entrepreneurship, and research,
                driving societal impact through collaborative spaces,
                transformative programs, and cutting-edge development
                initiatives.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Events Section */}
      <section className="events-section">
        <div className="container">
          <div className="section-header">
            <h2>Upcoming Events</h2>
            <div className="nav-arrows">
              <button className="nav-arrow">❮</button>
              <button className="nav-arrow">❯</button>
            </div>
          </div>
          <div className="events-grid">
            <div className="event-card">
              <div className="event-image" style={{backgroundImage: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'}}>
                <div className="event-date">
                  <span className="day">15</span>
                  <span className="month">OCT</span>
                </div>
              </div>
              <div className="event-content">
                <h3>Design Thinking Workshop for Youth Entrepreneurs</h3>
                <p className="event-meta">📍 SHIELD Hub, Nairobi • 🕒 9:00 AM - 4:00 PM</p>
                <p>Join us for an intensive workshop where young entrepreneurs will learn human-centered design principles to solve community challenges.</p>
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
                <h3>Pitch Night: Community Innovation Showcase</h3>
                <p className="event-meta">📍 Virtual Event • 🕒 6:00 PM - 8:30 PM</p>
                <p>Watch as our program graduates present their innovative solutions to real community problems to a panel of expert judges.</p>
                <Link to="/events" className="event-link">Register Now →</Link>
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
                <h3>Software Development Bootcamp Launch</h3>
                <p className="event-meta">📍 SHIELD Lab • 🕒 8:00 AM - 5:00 PM</p>
                <p>Kick-off event for our 12-week intensive software development program focusing on practical skills for immediate employment.</p>
                <Link to="/events" className="event-link">Apply Today →</Link>
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
                <h3>Women in Tech Leadership Summit</h3>
                <p className="event-meta">📍 Multi-venue Event • 🕒 Full Day</p>
                <p>Empowering women entrepreneurs and tech professionals through networking, mentorship sessions, and inspiring keynote speeches.</p>
                <Link to="/events" className="event-link">Join Us →</Link>
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

      {/* Blog Section */}
      <section className="blog-section">
        <div className="container">
          <div className="section-header">
            <h2>Insights on Community Innovation</h2>
            <div className="nav-arrows">
              <button className="nav-arrow">❮</button>
              <button className="nav-arrow">❯</button>
            </div>
          </div>
          <div className="blog-grid">
            <div className="blog-card">
              <div className="blog-image" style={{backgroundImage: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'}}>
                <div className="blog-category">Innovation</div>
              </div>
              <div className="blog-content">
                <h3>How Design Thinking is Transforming Youth Entrepreneurship in Kenya</h3>
                <p>Exploring the impact of human-centered design on creating sustainable solutions for community challenges across Nairobi's underserved areas.</p>
                <Link to="/blog" className="blog-link">Read More →</Link>
              </div>
            </div>
            
            <div className="blog-card">
              <div className="blog-image" style={{backgroundImage: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'}}>
                <div className="blog-category">Technology</div>
              </div>
              <div className="blog-content">
                <h3>The Future of Digital Skills Training in Underserved Communities</h3>
                <p>How technology hubs are bridging the digital divide and creating pathways to economic empowerment for marginalized youth.</p>
                <Link to="/blog" className="blog-link">Read More →</Link>
              </div>
            </div>
            
            <div className="blog-card">
              <div className="blog-image" style={{backgroundImage: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'}}>
                <div className="blog-category">Impact Stories</div>
              </div>
              <div className="blog-content">
                <h3>From Idea to Implementation: Success Stories from SHIELD Graduates</h3>
                <p>Meet the inspiring entrepreneurs who turned their community challenges into thriving social enterprises through our programs.</p>
                <Link to="/blog" className="blog-link">Read More →</Link>
              </div>
            </div>
            
            <div className="blog-card">
              <div className="blog-image" style={{backgroundImage: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)'}}>
                <div className="blog-category">Research</div>
              </div>
              <div className="blog-content">
                <h3>5 Key Barriers to Innovation in Low-Income Communities</h3>
                <p>Our latest research reveals the systemic challenges that prevent innovation ecosystems from thriving in underserved areas.</p>
                <Link to="/blog" className="blog-link">Read More →</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

    
    </div>
  );
};

export default Home;
