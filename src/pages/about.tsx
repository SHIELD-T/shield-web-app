// src/pages/About.jsx
import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="container">
          <div className="hero-content">
            <h1>About Shield Foundation</h1>
            <p className="hero-subtitle">
              Empowering communities through innovation, capacity building, and sustainable development
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="mission-vision">
        <div className="container">
          <div className="mission-vision-grid">
            <div className="mission-vision-item">
              <div className="image-placeholder large">
                <span>🎯</span>
                <p>Our Mission</p>
              </div>
              <div className="content">
                <h2>Our Mission</h2>
                <p>
                  To foster innovation and sustainable development by providing comprehensive 
                  capacity building services that empower individuals, organizations, and 
                  communities to achieve their full potential through digital transformation 
                  and evidence-based solutions.
                </p>
              </div>
            </div>
            
            <div className="mission-vision-item reverse">
              <div className="content">
                <h2>Our Vision</h2>
                <p>
                  A world where every community has access to innovative solutions and 
                  the capacity to drive sustainable development, creating lasting positive 
                  impact through technology, education, and collaborative partnerships.
                </p>
              </div>
              <div className="image-placeholder large">
                <span>👁️</span>
                <p>Our Vision</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="services-overview">
        <div className="container">
          <h2>Our Core Services</h2>
          <div className="services-intro">
            <div className="image-placeholder medium">
              <span>⚙️</span>
              <p>Innovation Hub</p>
            </div>
            <div className="services-text">
              <p>
                Shield Foundation specializes in delivering comprehensive innovation services 
                that bridge the gap between traditional development approaches and modern 
                digital solutions. Our multidisciplinary team works collaboratively to 
                design, implement, and evaluate programs that create measurable impact.
              </p>
            </div>
          </div>

          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">🤝</div>
              <h3>Innovation Services</h3>
              <ul>
                <li>Co-creating & planning innovative solutions</li>
                <li>Design thinking workshops</li>
                <li>Prototype development & testing</li>
                <li>Innovation ecosystem mapping</li>
              </ul>
            </div>

            <div className="service-card">
              <div className="service-icon">✍️</div>
              <h3>Capacity Building</h3>
              <ul>
                <li>Strategic planning & writing workshops</li>
                <li>Proposal development training</li>
                <li>Organizational development support</li>
                <li>Leadership development programs</li>
              </ul>
            </div>

            <div className="service-card">
              <div className="service-icon">🔍</div>
              <h3>Digital Transformation</h3>
              <ul>
                <li>Data analysis & insights</li>
                <li>Digital strategy development</li>
                <li>Technology integration support</li>
                <li>Digital literacy training</li>
              </ul>
            </div>

            <div className="service-card">
              <div className="service-icon">👥</div>
              <h3>Social Impact</h3>
              <ul>
                <li>Community engagement strategies</li>
                <li>Impact measurement & evaluation</li>
                <li>Stakeholder relationship building</li>
                <li>Sustainable development planning</li>
              </ul>
            </div>

            <div className="service-card">
              <div className="service-icon">🔬</div>
              <h3>Research & Development</h3>
              <ul>
                <li>Evidence-based research studies</li>
                <li>Policy analysis & recommendations</li>
                <li>Best practices documentation</li>
                <li>Knowledge management systems</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="process-section">
        <div className="container">
          <h2>Our Approach</h2>
          <div className="process-content">
            <div className="image-placeholder large">
              <span>🔄</span>
              <p>Our Process</p>
            </div>
            <div className="process-steps">
              <div className="step">
                <div className="step-number">1</div>
                <div className="step-content">
                  <h4>Assessment</h4>
                  <p>We begin by understanding your unique challenges and opportunities through comprehensive stakeholder consultation.</p>
                </div>
              </div>
              
              <div className="step">
                <div className="step-number">2</div>
                <div className="step-content">
                  <h4>Co-Design</h4>
                  <p>Working collaboratively with communities and organizations to design tailored solutions that meet specific needs.</p>
                </div>
              </div>
              
              <div className="step">
                <div className="step-number">3</div>
                <div className="step-content">
                  <h4>Implementation</h4>
                  <p>Deploying evidence-based interventions with continuous monitoring and adaptive management approaches.</p>
                </div>
              </div>
              
              <div className="step">
                <div className="step-number">4</div>
                <div className="step-content">
                  <h4>Evaluation</h4>
                  <p>Measuring impact through rigorous evaluation frameworks and sharing learnings for broader application.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section">
        <div className="container">
          <h2>Our Team & Expertise</h2>
          <div className="team-intro">
            <p>
              Our multidisciplinary team brings together expertise in innovation management, 
              digital transformation, social development, and research. We are passionate 
              about creating sustainable change through collaborative approaches.
            </p>
          </div>
          
          <div className="team-grid">
            <div className="team-member">
              <div className="image-placeholder small">
                <span>👤</span>
              </div>
              <h4>Leadership Team</h4>
              <p>Experienced leaders in nonprofit management and social innovation</p>
            </div>
            
            <div className="team-member">
              <div className="image-placeholder small">
                <span>💻</span>
              </div>
              <h4>Technical Experts</h4>
              <p>Digital transformation specialists and data analysts</p>
            </div>
            
            <div className="team-member">
              <div className="image-placeholder small">
                <span>🎓</span>
              </div>
              <h4>Capacity Builders</h4>
              <p>Training specialists and organizational development consultants</p>
            </div>
            
            <div className="team-member">
              <div className="image-placeholder small">
                <span>🔬</span>
              </div>
              <h4>Research Team</h4>
              <p>Social scientists and evaluation specialists</p>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="partners-section">
        <div className="container">
          <h2>Our Impact in Partnership</h2>
          <p className="partners-intro">
            We collaborate with leading organizations to amplify our impact and 
            reach more communities with innovative solutions.
          </p>
          
          <div className="partners-grid">
            <div className="partner-logo">
              <div className="image-placeholder partner">
                <span>🏛️</span>
                <p>USAID</p>
              </div>
            </div>
            
            <div className="partner-logo">
              <div className="image-placeholder partner">
                <span>🌍</span>
                <p>Impact Week</p>
              </div>
            </div>
            
            <div className="partner-logo">
              <div className="image-placeholder partner">
                <span>💰</span>
                <p>MercyCorp</p>
              </div>
            </div>
            
            <div className="partner-logo">
              <div className="image-placeholder partner">
                <span>🇰🇪</span>
                <p>KGSA</p>
              </div>
            </div>
            
            <div className="partner-logo">
              <div className="image-placeholder partner">
                <span>🤝</span>
                <p>Alliance</p>
              </div>
            </div>
            
            <div className="partner-logo">
              <div className="image-placeholder partner">
                <span>🏥</span>
                <p>Mawazo Africa</p>
              </div>
            </div>
            
            <div className="partner-logo">
              <div className="image-placeholder partner">
                <span>💳</span>
                <p>HuraPay</p>
              </div>
            </div>
            
            <div className="partner-logo">
              <div className="image-placeholder partner">
                <span>⚡</span>
                <p>SD-Tech</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="values-section">
        <div className="container">
          <h2>Our Core Values</h2>
          <div className="values-content">
            <div className="image-placeholder large">
              <span>💎</span>
              <p>Our Values</p>
            </div>
            <div className="values-list">
              <div className="value-item">
                <h4>🤝 Collaboration</h4>
                <p>We believe in the power of partnerships and co-creation to develop solutions that truly meet community needs.</p>
              </div>
              
              <div className="value-item">
                <h4>💡 Innovation</h4>
                <p>We embrace creative approaches and emerging technologies to address complex social challenges.</p>
              </div>
              
              <div className="value-item">
                <h4>📊 Evidence-Based</h4>
                <p>Our work is grounded in research, data analysis, and rigorous evaluation methodologies.</p>
              </div>
              
              <div className="value-item">
                <h4>🌱 Sustainability</h4>
                <p>We design interventions that create lasting change and build local capacity for continued impact.</p>
              </div>
              
              <div className="value-item">
                <h4>🎯 Transparency</h4>
                <p>We maintain open communication and accountability in all our partnerships and projects.</p>
              </div>
              
              <div className="value-item">
                <h4>🌍 Inclusivity</h4>
                <p>We ensure that our programs are accessible and beneficial to diverse communities and stakeholders.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Get Involved CTA */}
      <section className="get-involved">
        <div className="container">
          <div className="cta-content">
            <h2>Work with Shield</h2>
            <p>
              Ready to transform your organization's capacity and drive meaningful impact? 
              Let's collaborate to design innovative solutions tailored to your unique challenges.
            </p>
            <div className="cta-buttons">
              <a href="/contact" className="btn btn-primary">Get in Touch</a>
              <a href="/podcast" className="btn btn-secondary">Share Your Story</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;