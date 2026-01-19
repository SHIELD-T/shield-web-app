import { useState } from "react";
import { resolveUrl } from "../utils/assetUtils";
import "./home.css";

const Home = () => {
  const [activeTab, setActiveTab] = useState("design-thinking");

  const programs = {
   "design-thinking": {
     title: "Design Thinking School",
     description: "Within the context of the design thinking process, we empower youth in underprivileged communities with the skills to collaborate and think of themselves as problem solvers and to pioneer solutions to the problems they face within their community.",
     image: resolveUrl("assets/images/DT.jpg")
   },
   "entrepreneurship": {
     title: "SHIELD Entrepreneurship",
     description: "We provide comprehensive entrepreneurship training and mentorship to help young innovators transform their ideas into sustainable businesses.",
     image: resolveUrl("assets/images/ent.jpeg")
   },
   "software": {
     title: "Software Development",
     description: "Our software development program equips youth with modern coding skills and technical expertise to build digital solutions.",
     image: resolveUrl("assets/images/74.jpg")
   },
   "research": {
     title: "SIDLabs (Research & Development)",
     description: "Through our research and development lab, we create innovative solutions that address real community challenges.",
     image: resolveUrl("assets/images/DT-5.jpg")
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
                <img src={resolveUrl("assets/images/stories/4a870f56c198050135cdbb0e8145265d494c9fed.png")} alt="Community" />
              </div>
              <div className="about-image">
                <img src={resolveUrl("assets/images/stories/9086f7bcc0ceddcfa44b17e7d96b9ab5ad47f397.png")} alt="Youth" />
              </div>
              <div className="about-image">
                <img src={resolveUrl("assets/images/stories/c4272bf646f5c1f9b3b54aecb9a18fde15e76c0f.png")} alt="Culture" />
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
            <div className="challenge-item challenge-with-image">
              <img src={resolveUrl("assets/images/D_humancenterdness.jpg")} alt="Human Centeredness" />
              <div className="challenge-overlay">
                <h3>Human Centeredness</h3>
                <p>we make sure putting people at the heart of every experience comes first.</p>
              </div>
            </div>

            <div className="challenge-item challenge-with-image">
              <img src={resolveUrl("assets/images/D_innovation.jpg")} alt="Innovation" />
              <div className="challenge-overlay">
                <h3>Innovation</h3>
                <p>we make sure putting people at the heart of every experience comes first.</p>
              </div>
            </div>

            <div className="challenge-item challenge-with-image">
              <img src={resolveUrl("assets/images/D_integrity.jpeg")} alt="Integrity" />
              <div className="challenge-overlay">
                <h3>Integrity</h3>
                <p>we make sure putting people at the heart of every experience comes first.</p>
              </div>
            </div>

            <div className="challenge-item challenge-with-image">
              <img src={resolveUrl("assets/images/D_impact.jpg")} alt="Impact" />
              <div className="challenge-overlay">
                <h3>Impact</h3>
                <p>we make sure putting people at the heart of every experience comes first.</p>
              </div>
            </div>

            <div className="challenge-item challenge-with-image">
              <img src={resolveUrl("assets/images/D_Teamwork.jpeg")} alt="Team Work" />
              <div className="challenge-overlay">
                <h3>Team Work</h3>
                <p>we make sure putting people at the heart of every experience comes first.</p>
              </div>
            </div>

            <div className="challenge-item challenge-with-image">
              <img src={resolveUrl("assets/images/D_diversity.jpeg")} alt="Diversity" />
              <div className="challenge-overlay">
                <h3>Diversity</h3>
                <p>we make sure putting people at the heart of every experience comes first.</p>
              </div>
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