// src/pages/Home.jsx
import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import BlogSection from "../components/BlogSection";
import TeamSection from "../components/TeamSection";
import AboutSection from "../components/AboutSection";
import "./home.css";

const Home = () => {
  const [eventScrollIndex, setEventScrollIndex] = useState(0);
  
  // Refs for scroll animations
  const heroRef = useRef<HTMLElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const whyShieldRef = useRef<HTMLElement>(null);
  const eventsRef = useRef<HTMLElement>(null);
  const coursesRef = useRef<HTMLElement>(null);
  const ctaRef = useRef<HTMLElement>(null);
  const quoteRef = useRef<HTMLElement>(null);

  // Scroll animation effect
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, observerOptions);

    // Observe all sections
    const sections = [heroRef, quoteRef, aboutRef, whyShieldRef, eventsRef, coursesRef, ctaRef];
    sections.forEach(ref => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });



    return () => {
      observer.disconnect();
    };
  }, []);

  const scrollEvents = (direction: 'left' | 'right') => {
    const totalCards = 4;
    
    if (direction === 'left') {
      setEventScrollIndex(eventScrollIndex === 0 ? totalCards - 1 : eventScrollIndex - 1);
    } else if (direction === 'right') {
      setEventScrollIndex(eventScrollIndex === totalCards - 1 ? 0 : eventScrollIndex + 1);
    }
  };



  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero" ref={heroRef}>
        <div className="hero-overlay">
          <div className="container">
            <div className="hero-content">
              <h1>Empowering Innovation, Driving Impact</h1>
              <p>
                We bridge the gap between communities, technology, and sustainable development to co-create solutions that transform lives and build inclusive futures.
              </p>
              <div className="hero-buttons">
                
                <Link to="/about" className="btn btn-secondary">
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <div className="" ref={aboutRef}>
        <AboutSection />
      </div>

      {/* Why SHIELD is Essential Section */}
      <section className="why-shield-section" ref={whyShieldRef}>
        <div className="container">
          <div className="why-shield-content">
            <div className="why-shield-header">
              
              <h2><img src="public\favicon.png" alt="" /> Why SHIELD Is Essential <img src="public\favicon.png" alt="" /></h2>
              <p className="section-subtitle">
                Breaking the cycle of unemployment in underserved communities requires more than just skills training
              </p>
            </div>
            
            <div className="challenges-grid">
              <div className="challenge-item">
                <div className="challenge-icon">1</div>
                <h3>Saturated Job Market</h3>
                <p>Even with digital skills, youth face a competitive job market where traditional employment opportunities are limited. Many skilled individuals remain unemployed due to lack of connections and opportunities.</p>
              </div>
              
              <div className="challenge-item">
                <div className="challenge-icon">2</div>
                <h3>Missing Networks</h3>
                <p>Underserved communities lack access to professional networks, mentorship, and industry connections that are crucial for career advancement and entrepreneurial success.</p>
              </div>
              
              <div className="challenge-item">
                <div className="challenge-icon">3</div>
                <h3>Innovation Gap</h3>
                <p>Innovation resources are concentrated in affluent areas and universities, leaving talented youth in underserved communities without platforms to develop and showcase their ideas.</p>
              </div>
              
              <div className="challenge-item">
                <div className="challenge-icon">4</div>
                <h3>Lack of Entrepreneurial Support</h3>
                <p>While many have business ideas, they lack access to incubation programs, funding opportunities, and the ecosystem needed to transform ideas into sustainable ventures.</p>
              </div>
              
              <div className="challenge-item">
                <div className="challenge-icon">5</div>
                <h3>Skills-Opportunity Mismatch</h3>
                <p>Training programs often don't align with real market needs or fail to provide pathways to actual employment and entrepreneurial opportunities.</p>
              </div>
              
              <div className="challenge-item">
                <div className="challenge-icon">6</div>
                <h3>Systemic Barriers</h3>
                <p>Geographic isolation, limited infrastructure, and socioeconomic barriers create additional obstacles that prevent talented individuals from accessing opportunities.</p>
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
      <section className="events-section " ref={eventsRef}>
        <div className="container">
          <div className="e-section-header">
            <h2>Upcoming Events</h2>
            <div className="nav-arrows">
              <button 
                className="nav-arrow"
                onClick={() => scrollEvents('left')}
              >
                ←
              </button>
              <button 
                className="nav-arrow"
                onClick={() => scrollEvents('right')}
              >
                →
              </button>
            </div>
          </div>
          <div className="events-carousel-container">
            <div className="events-carousel">
              {[
                {
                  image: "https://images.unsplash.com/photo-1677506048148-0c914dd8197b?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTAwNDR8MHwxfHNlYXJjaHwyfHx3b3Jrc2hvcCUyMGJyYWluc3Rvcm1pbmclMjBkZXNpZ24lMjB0aGlua2luZyUyMGNvbGxhYm9yYXRpb258ZW58MHwwfHx8MTc1NjgwODE2Nnww&ixlib=rb-4.1.0&q=85",
                  day: "15",
                  month: "OCT",
                  title: "Design Thinking Workshop",
                  meta: "📍 SHIELD Hub • 🕐 9:00 AM",
                  description: "Intensive workshop for young entrepreneurs learning human-centered design.",
                  link: "Learn More →"
                },
                {
                  image: "https://images.unsplash.com/photo-1709377303352-7c845ac999ac?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTAwNDR8MHwxfHNlYXJjaHw4fHxwcmVzZW50YXRpb24lMjBpbm5vdmF0aW9uJTIwdGVjaG5vbG9neSUyMHNob3djYXNlfGVufDB8MHx8Ymx1ZXwxNzU2ODA4MTY1fDA&ixlib=rb-4.1.0&q=85",
                  day: "22",
                  month: "OCT",
                  title: "Innovation Showcase",
                  meta: "📍 Virtual Event • 🕐 6:00 PM",
                  description: "Program graduates present solutions to community problems.",
                  link: "Register →"
                },
                {
                  image: "https://images.unsplash.com/photo-1568716353609-12ddc5c67f04?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTAwNDR8MHwxfHNlYXJjaHw0fHxjb2RpbmclMjBwcm9ncmFtbWluZyUyMGJvb3RjYW1wJTIwbGVhcm5pbmd8ZW58MHwwfHx8MTc1NjgwODE2Nnww&ixlib=rb-4.1.0&q=85",
                  day: "05",
                  month: "NOV",
                  title: "Bootcamp Launch",
                  meta: "📍 SHIELD Lab • 🕐 8:00 AM",
                  description: "12-week intensive software development program launch.",
                  link: "Apply →"
                },
                {
                  image: "https://images.unsplash.com/photo-1573165231977-3f0e27806045?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTAwNDR8MHwxfHNlYXJjaHw4fHx3b21lbiUyMHRlY2hub2xvZ3klMjBjb25mZXJlbmNlJTIwbmV0d29ya2luZ3xlbnwwfDB8fHwxNzU2ODA4MTY2fDA&ixlib=rb-4.1.0&q=85",
                  day: "12",
                  month: "NOV",
                  title: "Women in Tech Summit",
                  meta: "📍 Multi-venue • 🕐 Full Day",
                  description: "Empowering women through networking and mentorship.",
                  link: "Join Us →"
                }
              ].map((event, index) => {
                const getCardClass = () => {
                  const totalCards = 4;
                  
                  // Center card (active/focused)
                  if (index === eventScrollIndex) return 'center';
                  
                  // Left card
                  const leftIndex = eventScrollIndex === 0 ? totalCards - 1 : eventScrollIndex - 1;
                  if (index === leftIndex) return 'left';
                  
                  // Right card
                  const rightIndex = eventScrollIndex === totalCards - 1 ? 0 : eventScrollIndex + 1;
                  if (index === rightIndex) return 'right';
                  
                  // Hidden cards
                  return 'hidden';
                };
                
                const cardClass = getCardClass();
                
                return (
                  <div 
                    key={index}
                    className={`event-card-carousel ${cardClass}`}
                    onClick={() => {
                      if (cardClass === 'left' || cardClass === 'right') {
                        setEventScrollIndex(index);
                      }
                    }}
                    style={{ cursor: cardClass === 'left' || cardClass === 'right' ? 'pointer' : 'default' }}
                  >
                  <div className="event-image">
                    <img 
                      src={event.image}
                      alt={event.title}
                      width="100%"
                      height="220"
                    />
                    <div className="event-date">
                      <span className="day">{event.day}</span>
                      <span className="month">{event.month}</span>
                    </div>
                  </div>
                  <div className="event-content">
                    <h3>{event.title}</h3>
                    <p className="event-meta">{event.meta}</p>
                    <p>{event.description}</p>
                    <Link to="/events" className="event-link">{event.link}</Link>
                  </div>
                </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Courses Section */}
      <section className="courses-section " ref={coursesRef}>
        <div className="container">
          <div className="courses-header">
            <h2>Online Courses</h2>
            <p className="section-subtitle">
              Checkout our tutor LMS for both free and paid courses.
            </p>
          </div>
          
          <div className="courses-grid">
            <div className="course-card">
              <div className="course-content">
                <div className="course-category">Web Development</div>
                <h3>Full-Stack Development Bootcamp</h3>
                <p>Master modern web technologies including React, Node.js, and database management in this intensive 12-week program.</p>
                <div className="course-details">
                  <span className="course-duration">📅 12 Weeks</span>
                  <span className="course-level">🎯 Beginner to Advanced</span>
                </div>
                <Link to="/programs" className="course-btn">Enroll Now</Link>
              </div>
            </div>
            
            <div className="course-card">
              <div className="course-content">
                <div className="course-category">Design Thinking</div>
                <h3>Human-Centered Design Workshop</h3>
                <p>Learn to solve complex problems through empathy, ideation, and prototyping using design thinking methodologies.</p>
                <div className="course-details">
                  <span className="course-duration">📅 6 Weeks</span>
                  <span className="course-level">🎯 All Levels</span>
                </div>
                <Link to="/programs" className="course-btn">Enroll Now</Link>
              </div>
            </div>
            
            <div className="course-card">
              <div className="course-content">
                <div className="course-category">Entrepreneurship</div>
                <h3>Social Enterprise Development</h3>
                <p>Build sustainable businesses that create positive social impact while generating revenue and growth.</p>
                <div className="course-details">
                  <span className="course-duration">📅 8 Weeks</span>
                  <span className="course-level">🎯 Intermediate</span>
                </div>
                <Link to="/programs" className="course-btn">Enroll Now</Link>
              </div>
            </div>
            
            <div className="course-card">
              <div className="course-content">
                <div className="course-category">Data Science</div>
                <h3>Data Analytics for Social Good</h3>
                <p>Harness the power of data to drive social change and make informed decisions for community development.</p>
                <div className="course-details">
                  <span className="course-duration">📅 10 Weeks</span>
                  <span className="course-level">🎯 Intermediate</span>
                </div>
                <Link to="/programs" className="course-btn">Enroll Now</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section - Now Below CTA */}
      <BlogSection />

      {/* Team Section */}
      <TeamSection />

     {/* Quote Section */}
      <section className="quote-section " ref={quoteRef}>
        <div className="container">
          <div className="quote-content">
            <p className="quote-text">
             <i> "None of us, including me, ever do great things. But we can all do small things, with great love, and together we can do something wonderful."</i>
            </p>
            <p className="quote-author">– Mother Teresa</p>
          </div>
        </div>
      </section>

       {/* Call to Action */}
      <section className="hcta-section " ref={ctaRef}>
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
    </div>
  );
};

export default Home;