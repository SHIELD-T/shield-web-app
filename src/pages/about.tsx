// src/pages/About.jsx
import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="about-container">
          <div className="about-hero-content">
            <h1>About Shield Foundation</h1>
            <p className="hero-subtitle">
              Empowering communities through innovation, capacity building, and sustainable development
            </p>
            <div className="hero-actions">
              <a href="#services" className="hero-btn primary">
                <span>Explore Our Work</span>
              </a>
              <a href="#contact" className="hero-btn secondary">
                <span>Get Involved</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="mission-vision">
        <div className="about-container">
          <div className="mission-vision-grid">
            <div className="mission-vision-item">
              <img src="/assets/SDGs/Goal-17-Partnerships-for-the-Goals-_-The-Worlds-Largest-Lesson.jpeg" alt="Our Mission" className="image-placeholder large" />
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
              <img src="/assets/SDGs/SDG-4-Quality-Education.jpeg" alt="Our Vision" className="image-placeholder large" />
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="services-overview">
        <div className="about-container">
          <h2>Our Core Services</h2>
          <div className="services-intro">
            <img src="/assets/images/DT.jpg" alt="Innovation Hub" className="about-image-placeholder medium" />
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
            <div className="about-service-card">
              <div className="about-service-icon">🤝</div>
              <h3>Innovation Services</h3>
              <ul>
                <li>Co-creating & planning innovative solutions</li>
                <li>Design thinking workshops</li>
                <li>Prototype development & testing</li>
                <li>Innovation ecosystem mapping</li>
              </ul>
            </div>

            <div className="about-service-card">
              <div className="about-service-icon">✍️</div>
              <h3>Capacity Building</h3>
              <ul>
                <li>Strategic planning & writing workshops</li>
                <li>Proposal development training</li>
                <li>Organizational development support</li>
                <li>Leadership development programs</li>
              </ul>
            </div>

            <div className="about-service-card">
              <div className="about-service-icon">🔍</div>
              <h3>Digital Transformation</h3>
              <ul>
                <li>Data analysis & insights</li>
                <li>Digital strategy development</li>
                <li>Technology integration support</li>
                <li>Digital literacy training</li>
              </ul>
            </div>

            <div className="about-service-card">
              <div className="about-service-icon">👥</div>
              <h3>Social Impact</h3>
              <ul>
                <li>Community engagement strategies</li>
                <li>Impact measurement & evaluation</li>
                <li>Stakeholder relationship building</li>
                <li>Sustainable development planning</li>
              </ul>
            </div>

            <div className="about-service-card">
              <div className="about-service-icon">🔬</div>
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
        <div className="about-container">
          <h2>Our Approach</h2>
          <div className="process-content">
            <img src="/assets/images/project4.jpg" alt="Our Process" className="image-placeholder large" />
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

      {/* Facilities Overview */}
      <section className="facilities-overview">
        <div className="about-container">
          <h2>Our Facilities & Services</h2>
          <div className="facilities-intro">
            <p>
              To successfully deliver our programs, we are setting up innovative hubs that are accessible, inclusive, youth-focused to support youth and small entrepreneurs from underserved communities.
            </p>
          </div>

          {/* Co-working Spaces */}
          <div className="facility-section">
            <div className="facility-content">
              <div className="facility-card">
                <h3>CO-WORKING SPACES</h3>
                <div className="facility-icon">
                  <span>💼</span>
                </div>
                <ul>
                  <li>Desk and Chair</li>
                  <li>Access to Internet</li>
                  <li>Phone booths</li>
                  <li>Complementary services</li>
                </ul>
              </div>
              <div className="facility-description">
                <p>
                  Our co-working space is more than just an office—it's a vibrant community designed to inspire creativity, collaboration, and productivity. With state-of-the-art amenities, comfortable workstations, and flexible membership options in open and private rooms, we provide everything you need to succeed. Whether you're an entrepreneur, freelancer, or part of a growing team, our flexible membership plans allow you to choose what works best for your needs. Plus, our community events and networking opportunities connect you with like-minded professionals, helping you grow both personally and professionally. Join us today and experience a workplace that fuels your ambition!
                </p>
              </div>
            </div>
          </div>

          {/* Creative Studios */}
          <div className="facility-section reverse">
            <div className="facility-content">
              <div className="facility-description">
                <p>
                  Our creative studio is a one-stop destination for creators, offering top-tier podcast, photography, and videography facilities to bring your vision to life. Equipped with state-of-the-art technology, soundproofed rooms, professional-grade lighting, and cutting-edge editing tools, we cater to all your creative needs with unlimited possibilities for excellence. Our flexible booking options and supportive environment ensure you have the time and space to create without limits. Plus, being part of our creative community means access to networking opportunities and inspiration from fellow creators. Sign up today and turn your creative ideas into reality with ease and excellence!
                </p>
              </div>
              <div className="facility-card">
                <h3>CREATIVE STUDIOS</h3>
                <div className="facility-icon">
                  <span>📹</span>
                </div>
                <ul>
                  <li>Podcast Studios</li>
                  <li>Videography studios</li>
                  <li>Music Studio</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Rooms */}
          <div className="facility-section">
            <div className="facility-content">
              <div className="facility-card">
                <h3>ROOMS</h3>
                <div className="facility-icon">
                  <span>🏢</span>
                </div>
                <ul>
                  <li>Meeting Rooms</li>
                  <li>Board Rooms</li>
                  <li>Training rooms</li>
                  <li>Brainstorming rooms</li>
                </ul>
              </div>
              <div className="facility-description">
                <p>
                  Our diverse range of rooms—meeting rooms, boardrooms, training spaces, and brainstorming hubs—are thoughtfully designed to elevate every interaction and session. Equipped with modern technology, comfortable seating, and customizable layouts, these spaces create the perfect environment for productive meetings, dynamic training sessions and innovative brainstorming sessions. Whether you need a professional setting to impress clients or a creative space to spark new ideas, our rooms provide the perfect backdrop. With seamless booking and a supportive staff to ensure everything runs smoothly, your events will be memorable and more. Sign up today to take your meetings and events to the next level!
                </p>
              </div>
            </div>
          </div>

          {/* Community Spaces */}
          <div className="facility-section reverse">
            <div className="facility-content">
              <div className="facility-description">
                <p>
                  Our community spaces—spanning conference halls, exhibition areas, and a welcoming restaurant—are at the heart of connection and collaboration. These versatile spaces are perfect for hosting conferences, exhibitions, cultural events, and enjoying meaningful conversations over a delicious meal. Designed to foster interaction and inspire innovation, they combine style and functionality to create memorable experiences. Whether you're organizing a large-scale conference, an intimate exhibition, or simply looking for a place to connect and share ideas, we have the perfect occasion. Sign up today and immerse yourself in a vibrant environment where ideas flourish, connections thrive, and opportunities abound!
                </p>
              </div>
              <div className="facility-card">
                <h3>COMMUNITY SPACES</h3>
                <div className="facility-icon">
                  <span>🏛️</span>
                </div>
                <ul>
                  <li>Conference facilities</li>
                  <li>Exhibition spaces</li>
                  <li>Restaurant</li>
                </ul>
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
              <img src="/assets/Founders/member1-e1736692990210.jpg" alt="Leadership Team" className="image-placeholder small" />
              <h4>Leadership Team</h4>
              <p>Experienced leaders in nonprofit management and social innovation</p>
            </div>

            <div className="team-member">
              <img src="/assets/Founders/member2-scaled-e1736693355648.jpg" alt="Technical Experts" className="image-placeholder small" />
              <h4>Technical Experts</h4>
              <p>Digital transformation specialists and data analysts</p>
            </div>

            <div className="team-member">
              <img src="/assets/Founders/member3.jpg" alt="Capacity Builders" className="image-placeholder small" />
              <h4>Capacity Builders</h4>
              <p>Training specialists and organizational development consultants</p>
            </div>

            <div className="team-member">
              <img src="/assets/Founders/member1-e1736692990210.jpg" alt="Research Team" className="image-placeholder small" />
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
              <img src="/assets/Partners/digit.png" alt="Digit" className="image-placeholder partner" />
            </div>

            <div className="partner-logo">
              <img src="/assets/Partners/helpAlliance.png" alt="Help Alliance" className="image-placeholder partner" />
            </div>

            <div className="partner-logo">
              <img src="/assets/Partners/hurupay.png" alt="HuruPay" className="image-placeholder partner" />
            </div>

            <div className="partner-logo">
              <img src="/assets/Partners/KGSA.jpg" alt="KGSA" className="image-placeholder partner" />
            </div>

            <div className="partner-logo">
              <img src="/assets/Partners/partner1.png" alt="Partner 1" className="image-placeholder partner" />
            </div>

            <div className="partner-logo">
              <img src="/assets/Partners/partner2.png" alt="Partner 2" className="image-placeholder partner" />
            </div>

            <div className="partner-logo">
              <img src="/assets/Partners/partner3.png" alt="Partner 3" className="image-placeholder partner" />
            </div>

            <div className="partner-logo">
              <img src="/assets/Partners/partner5.png" alt="Partner 5" className="image-placeholder partner" />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="values-section">
        <div className="container">
          <h2>Our Core Values</h2>
          <div className="values-content">
            <img src="/assets/SDGs/Sustainability.jpeg" alt="Our Values" className="image-placeholder large" />
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