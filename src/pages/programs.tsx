// src/pages/Programs.jsx
import React from "react";
import "./Programs.css";

const Programs = () => {
  return (
    <div className="programs-page">
      {/* Hero Section */}
      <section className="programs-hero">
        <div className="programs-hero-overlay">
          <div className="programs-container">
            <div className="programs-hero-content">
              <h1>Programs We Offer</h1>
              <p>
                Empowering underserved youth through innovative programs in entrepreneurship, 
                design thinking, technology, and leadership development.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Programs Section */}
      <section className="main-programs-section">
        <div className="programs-container">
          <h2>Our Core Programs</h2>
          <div className="main-programs-grid">
            <div className="main-program-card">
              <div className="program-icon">🎓</div>
              <h3>Design Thinking School</h3>
              <p>
                Within the context of the design thinking process, we empower
                youth in underprivileged communities with the skills to
                collaborate and think of themselves as problem solvers and to
                pioneer solutions to the problems they face within their
                community.
              </p>
              <div className="program-image-placeholder">
                <span>📐</span>
                <p>Design Thinking Workshop</p>
              </div>
            </div>
            
            <div className="main-program-card">
              <div className="program-icon">🏥</div>
              <h3>SHIELD Entrepreneurship</h3>
              <p>
                This program is tailored at supporting any business especially
                those that are not venture backable. The SMEs will receive
                personalized training and mentorship focused on building their
                capacity to operate the business successfully, unlock financing
                from financial institutions and scale to new levels.
              </p>
              <div className="program-image-placeholder">
                <span>💼</span>
                <p>Entrepreneurship Training</p>
              </div>
            </div>
            
            <div className="main-program-card">
              <div className="program-icon">🌱</div>
              <h3>Software Development</h3>
              <p>
                We provide a community for learning and earning opportunities.
                Our certifications prepare you for a career in software
                development, equip you with business acumen to help take your
                idea to the next level.
              </p>
              <div className="program-image-placeholder">
                <span>💻</span>
                <p>Coding Bootcamp Session</p>
              </div>
            </div>
            
            <div className="main-program-card">
              <div className="program-icon">💼</div>
              <h3>SIDLabs (Research & Development)</h3>
              <p>
                SID is a hub for innovation, entrepreneurship, and research,
                driving societal impact through collaborative spaces,
                transformative programs, and cutting-edge development
                initiatives.
              </p>
              <div className="program-image-placeholder">
                <span>🔬</span>
                <p>Research Laboratory</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specialized Programs Section */}
      <section className="specialty-programs-section">
        <div className="programs-container">
          <h2>Specialized Programs</h2>
          
          <div className="specialty-program-feature">
            <div className="specialty-program-text">
              <h3>Digital Learning</h3>
              <p>
                Comprehensive digital and AI-powered learning platforms designed to bridge
                the digital divide. Our programs include coding bootcamps, digital literacy
                training, and AI integration workshops that prepare participants for the
                modern workforce.
              </p>
              <a href="/programs/digital-learning" className="programs-btn programs-btn-outline">
                Learn More
              </a>
            </div>
            <div className="specialty-program-image">
              <div className="program-image-placeholder">
                <span>📱</span>
                <p>Digital Learning Platform</p>
              </div>
            </div>
          </div>

          <div className="specialty-program-feature reverse-layout">
            <div className="specialty-program-image">
              <div className="program-image-placeholder">
                <span>✅</span>
                <p>Quality Assurance Process</p>
              </div>
            </div>
            <div className="specialty-program-text">
              <h3>Quality Assurance</h3>
              <p>
                Ensuring excellence in all our programs through rigorous monitoring,
                evaluation, and continuous improvement processes. We maintain high
                standards while adapting to community needs and emerging challenges.
              </p>
              <a href="/programs/quality-assurance" className="programs-btn programs-btn-outline">
                Learn More
              </a>
            </div>
          </div>

          <div className="specialty-program-feature">
            <div className="specialty-program-text">
              <h3>Skills Development & Mentoring</h3>
              <p>
                Comprehensive skills training combined with personalized mentorship
                programs. We focus on both technical and soft skills development,
                preparing participants for sustainable career growth and leadership roles.
              </p>
              <a href="/programs/skills-mentoring" className="programs-btn programs-btn-outline">
                Learn More
              </a>
            </div>
            <div className="specialty-program-image">
              <div className="program-image-placeholder">
                <span>🤝</span>
                <p>Mentorship Session</p>
              </div>
            </div>
          </div>
        </div>
      </section>

     

      {/* Program Process Section */}
      <section className="program-process-section">
        <div className="programs-container">
          <h2>How Our Programs Work</h2>
          <div className="program-process-grid">
            <div className="program-process-step">
              <div className="process-step-number">1</div>
              <div className="program-icon">📋</div>
              <h3>Assessment & Selection</h3>
              <p>
                Comprehensive evaluation of participants' needs, skills, and goals
                to ensure proper program placement and maximum impact.
              </p>
              <div className="program-image-placeholder small-placeholder">
                <span>📝</span>
                <p>Assessment Process</p>
              </div>
            </div>

            <div className="program-process-step">
              <div className="process-step-number">2</div>
              <div className="program-icon">🎯</div>
              <h3>Intensive Training</h3>
              <p>
                Hands-on workshops, practical sessions, and mentorship programs
                delivered by industry experts and experienced practitioners.
              </p>
              <div className="program-image-placeholder small-placeholder">
                <span>👨‍🏫</span>
                <p>Training Sessions</p>
              </div>
            </div>

            <div className="program-process-step">
              <div className="process-step-number">3</div>
              <div className="program-icon">🚀</div>
              <h3>Implementation & Support</h3>
              <p>
                Ongoing support for project implementation, business launch,
                and continuous mentorship for sustainable growth.
              </p>
              <div className="program-image-placeholder small-placeholder">
                <span>🤝</span>
                <p>Support Network</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Program Impact Stats */}
      <section className="program-impact-section">
        <div className="programs-container">
          <h2>Program Impact</h2>
          <div className="program-impact-grid">
            <div className="program-impact-item">
              <div className="impact-number">500+</div>
              <div className="impact-label">Youth Trained</div>
            </div>
            <div className="program-impact-item">
              <div className="impact-number">50+</div>
              <div className="impact-label">Enterprises Launched</div>
            </div>
            <div className="program-impact-item">
              <div className="impact-number">15</div>
              <div className="impact-label">Communities Reached</div>
            </div>
            <div className="program-impact-item">
              <div className="impact-number">80%</div>
              <div className="impact-label">Employment Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Program Features */}
      <section className="program-features-section">
        <div className="programs-container">
          <h2>What Makes Our Programs Unique</h2>
          <div className="program-features-grid">
            <div className="program-feature-card">
              <div className="program-icon">🎯</div>
              <h3>Community-Centered Approach</h3>
              <p>
                All programs are designed with deep community input and focus on
                solving real local challenges while building local capacity.
              </p>
            </div>

            <div className="program-feature-card">
              <div className="program-icon">🔄</div>
              <h3>Iterative Learning</h3>
              <p>
                Using design thinking principles, participants learn through
                prototyping, testing, and refining their ideas and solutions.
              </p>
            </div>

            <div className="program-feature-card">
              <div className="program-icon">🤝</div>
              <h3>Peer-to-Peer Learning</h3>
              <p>
                Collaborative learning environments where participants learn
                from each other's experiences and build lasting professional networks.
              </p>
            </div>

            <div className="program-feature-card">
              <div className="program-icon">📈</div>
              <h3>Measurable Impact</h3>
              <p>
                All programs include clear metrics and evaluation frameworks
                to ensure continuous improvement and demonstrable outcomes.
              </p>
            </div>

            <div className="program-feature-card">
              <div className="program-icon">🌍</div>
              <h3>Sustainable Solutions</h3>
              <p>
                Focus on creating long-term, sustainable solutions that continue
                to benefit communities long after program completion.
              </p>
            </div>

            <div className="program-feature-card">
              <div className="program-icon">💡</div>
              <h3>Innovation-Driven</h3>
              <p>
                Encouraging creative thinking and innovative approaches to
                problem-solving through cutting-edge methodologies and tools.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Application Section */}
      <section className="program-application-section">
        <div className="programs-container">
          <div className="program-application-content">
            <div className="program-application-text">
              <h2>Ready to Join Our Programs?</h2>
              <p>
                Our application process is designed to be accessible and inclusive.
                We welcome applications from motivated individuals who are committed
                to creating positive change in their communities.
              </p>
              <div className="application-requirements">
                <h4>Application Requirements:</h4>
                <ul>
                  <li>Commitment to community development</li>
                  <li>Basic literacy and numeracy skills</li>
                  <li>Willingness to learn and collaborate</li>
                  <li>Local community connection</li>
                </ul>
              </div>
              <div className="program-application-buttons">
                <a href="/apply" className="programs-btn programs-btn-primary">
                  Apply Now
                </a>
                <a href="/contact" className="programs-btn programs-btn-outline">
                  Contact Us
                </a>
              </div>
            </div>
            <div className="program-application-image">
              <div className="program-image-placeholder">
                <span>📝</span>
                <p>Application Process</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="programs-cta-section">
        <div className="programs-container">
          <div className="programs-cta-content">
            <h2>Transform Your Community</h2>
            <p>
              Join thousands of young innovators who are already making a difference.
              Our programs provide the tools, knowledge, and support you need to
              create lasting positive change.
            </p>
            <div className="programs-cta-buttons">
              <a href="/apply" className="programs-btn programs-btn-primary">
                Start Your Journey
              </a>
              <a href="/donate" className="programs-btn programs-btn-secondary">
                Support Our Mission
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Programs;