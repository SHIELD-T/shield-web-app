import { useState } from "react";
import "./home.css";

const Home = () => {
  const [activeTab, setActiveTab] = useState("design-thinking");

  const programs = {
    "design-thinking": {
      title: "Design Thinking School",
      description: "Within the context of the design thinking process, we empower youth in underprivileged communities with the skills to collaborate and think of themselves as problem solvers and to pioneer solutions to the problems they face within their community.",
      image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=800&auto=format&fit=crop"
    },
    "entrepreneurship": {
      title: "SHIELD Entrepreneurship", 
      description: "We provide comprehensive entrepreneurship training and mentorship to help young innovators transform their ideas into sustainable businesses.",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&auto=format&fit=crop"
    },
    "software": {
      title: "Software Development",
      description: "Our software development program equips youth with modern coding skills and technical expertise to build digital solutions.",
      image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&auto=format&fit=crop"
    },
    "research": {
      title: "SIDLabs (Research & Development)",
      description: "Through our research and development lab, we create innovative solutions that address real community challenges.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&auto=format&fit=crop"
    }
  };

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1>Inspiring Growth, Shaping Tomorrow</h1>
            <p>The Social Hub for Innovation Entrepreneurship Leadership and Design Thinking</p>
            <a href="/donate" className="btn btn-primary">
              Donate
            </a>
          </div>
          <div className="hero-img-home">
            <img src={new URL('/assets/images/homepage.png', import.meta.url).href} alt="Africa Map with Community" />
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="about-preview">
        <div className="container">
          <h2 className="about-section-title">There's More to Our Story</h2>
          
          <div className="about-content">
            <div className="about-text">
              <p>
                The Social Hub for Innovation, Entrepreneurship, Leadership and Design-Thinking(SHIELD) is a non-profit social innovation and technology hub that promotes sustainable socio-economic development by empowering youth from underserved communities to leverage their talents and skills to tackle social problems in their communities and transform their ideas into impactful social enterprises.
              </p>
            </div>
            <div className="about-images">
              <div className="about-image">
                <img src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=400&auto=format&fit=crop" alt="Community" />
              </div>
              <div className="about-image">
                <img src="https://images.unsplash.com/photo-1509062522246-3755977927d7?w=400&auto=format&fit=crop" alt="Youth" />
              </div>
              <div className="about-image">
                <img src="https://images.unsplash.com/photo-1516450137517-162bfbeb8dba?w=400&auto=format&fit=crop" alt="Culture" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="events-section">
        <div className="container">
          <h2>Let's Change Stories Together</h2>
          <p className="section-subtitle">
            There are 1M new 18 year-olds in Kenya each year. These young men and women needs empowerment
          </p>
          
          <div className="programs-tabs">
            <button 
              className={`tab-btn ${activeTab === "design-thinking" ? "active" : ""}`}
              onClick={() => setActiveTab("design-thinking")}
            >
              Design Thinking School
            </button>
            <button 
              className={`tab-btn ${activeTab === "entrepreneurship" ? "active" : ""}`}
              onClick={() => setActiveTab("entrepreneurship")}
            >
              SHIELD Entrepreneurship
            </button>
            <button 
              className={`tab-btn ${activeTab === "software" ? "active" : ""}`}
              onClick={() => setActiveTab("software")}
            >
              Software Development
            </button>
            <button 
              className={`tab-btn ${activeTab === "research" ? "active" : ""}`}
              onClick={() => setActiveTab("research")}
            >
              SIDLabs (Research & Development)
            </button>
          </div>

          <div className="program-card">
            <div className="program-image">
              <img src={programs[activeTab as keyof typeof programs].image} alt={programs[activeTab as keyof typeof programs].title} />
            </div>
            <div className="program-content">
              <h3>{programs[activeTab as keyof typeof programs].title}</h3>
              <p>{programs[activeTab as keyof typeof programs].description}</p>
              <a href="/programs" className="btn btn-primary">
                Donate to this cause
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Distinguishes Section */}
      <section className="why-shield-section">
        <div className="container">
          <h2>What distinguishes us?</h2>
          
          <div className="challenges-grid">
            <div className="challenge-item">
              <div className="challenge-icon-img">
                <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
                  <circle cx="40" cy="40" r="15" fill="currentColor" opacity="0.2"/>
                  <circle cx="25" cy="50" r="10" fill="currentColor" opacity="0.4"/>
                  <circle cx="55" cy="50" r="10" fill="currentColor" opacity="0.4"/>
                </svg>
              </div>
              <h3>Human Centeredness</h3>
              <p>we make sure putting people at the heart of every experience comes first.</p>
            </div>

            <div className="challenge-item">
              <div className="challenge-icon-img">
                <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
                  <path d="M40 20 L50 35 L40 30 L30 35 Z" fill="currentColor"/>
                  <circle cx="40" cy="45" r="8" fill="currentColor" opacity="0.3"/>
                </svg>
              </div>
              <h3>Innovation</h3>
              <p>we make sure putting people at the heart of every experience comes first.</p>
            </div>

            <div className="challenge-item">
              <div className="challenge-icon-img">
                <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
                  <path d="M40 25 L50 35 L48 50 L40 55 L32 50 L30 35 Z" fill="currentColor" opacity="0.3"/>
                  <path d="M35 40 L38 43 L45 35" stroke="currentColor" strokeWidth="2" fill="none"/>
                </svg>
              </div>
              <h3>Integrity</h3>
              <p>we make sure putting people at the heart of every experience comes first.</p>
            </div>

            <div className="challenge-item challenge-with-image">
              <img src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=500&auto=format&fit=crop" alt="Impact" />
              <div className="challenge-overlay">
                <h3>Impact</h3>
                <p>we make sure putting people at the heart of every experience comes first.</p>
              </div>
            </div>

            <div className="challenge-item challenge-with-image">
              <img src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=500&auto=format&fit=crop" alt="Team Work" />
              <div className="challenge-overlay">
                <h3>Team Work</h3>
                <p>we make sure putting people at the heart of every experience comes first.</p>
              </div>
            </div>

            <div className="challenge-item">
              <div className="challenge-icon-img">
                <svg width="120" height="120" viewBox="0 0 120 120" fill="none">
                  <circle cx="45" cy="40" r="12" fill="currentColor" opacity="0.4"/>
                  <circle cx="75" cy="40" r="12" fill="currentColor" opacity="0.4"/>
                  <circle cx="60" cy="65" r="12" fill="currentColor" opacity="0.4"/>
                  <circle cx="35" cy="75" r="10" fill="currentColor" opacity="0.3"/>
                  <circle cx="85" cy="75" r="10" fill="currentColor" opacity="0.3"/>
                </svg>
              </div>
              <h3>Diversity</h3>
              <p>we make sure putting people at the heart of every experience comes first.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Progress Section */}
      <section className="courses-section progress-section-white">
        <div className="container progress-layout">
          <div className="progress-text">
            <h2>Check Our Progress Lately</h2>
            <p>
              Our key goal is to touch the lives of people in underserved communities by removing barriers to access of socio-economic opportunities and enable them contribute to community development.
            </p>
          </div>
          <div className="progress-video">
            <div className="video-wrapper">
              <img src="https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=800&auto=format&fit=crop" alt="Students in classroom" />
              <div className="play-button">
                <svg width="116" height="116" viewBox="0 0 116 116" fill="none">
                  <circle cx="58" cy="58" r="58" fill="white" fillOpacity="0.4"/>
                  <path d="M48 40L76 58L48 76V40Z" fill="white"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>
   {/* Impact Stats Section */}
   <section className="home-impact-stats">
        <div className="home-impact-container">
          <p className="impact-question">Have you made a donation or fundraised for us?</p>
          <h2>Where your money goes</h2>
          
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-number">120+</div>
              <div className="stat-label">Students</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">72%</div>
              <div className="stat-label">Research & Support</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">28%</div>
              <div className="stat-label">Fundraising</div>
            </div>
          </div>

          <div className="impact-cta">
            <h3>Help us support our community</h3>
            <a href="/donate" className="btn btn-primary impact-btn">
              Donate
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;