// src/pages/About.jsx
import './About.css';
import { resolveUrl } from '../utils/assetUtils';

const About = () => {
  return (
    <div className="about">
      {/* Hero Section */}
      <section className="programs-hero">
        <video className="programs-hero-video" autoPlay muted loop playsInline>
          <source src={resolveUrl("assets/videos/about1.mp4")} type="video/mp4" />
        </video>
        <div className="programs-hero-overlay">
          <div className="programs-container">
            <div className="programs-hero-content">
              <h1>About Us</h1>
              <p>
              At SHIELD, we are dedicated to empowering individuals and communities
              through innovative programs, cutting-edge training, and impactful
              mentorship. Our mission is to create sustainable solutions that drive
              positive change and build a brighter future for all.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="mission-vision">
        <div className="about-container">
          <div className="mission-vision-cards">
            <div className="mission-card">
              <h2>OUR MISSION</h2>
              <p>
                To foster innovation and sustainable development by providing comprehensive
                capacity building services that empower individuals, organizations, and
                communities to achieve their full potential through digital transformation
                and evidence-based solutions.
              </p>
            </div>
            
            <div className="vision-card">
              <h2>OUR VISION</h2>
              <p>
                "We envision thriving ecosystems where local knowledge meets global innovation, where youth are empowered as changemakers, and where every individual has the tools and opportunities to contribute meaningfully to their community's growth and resilience.

              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
<section className="services-overview" id="services">
  <div className="about-container">
    <h2>Our Core Services</h2>

    <div className="services-grid">
      {/* Card 1 */}
      <div className="about-service-card">
        <img src={resolveUrl("assets/images/Digitalinnovation.jpg")} alt="Innovation Services" className="card-image" />
        <div className="card-content">
          <h3>Innovation Services</h3>
          <ul>
            <li>Co-creating & planning innovative solutions</li>
            <li>Design thinking workshops</li>
            <li>Prototype development & testing</li>
            <li>Innovation ecosystem mapping</li>
          </ul>
        </div>
      </div>

      {/* Card 2 */}
      <div className="about-service-card">
        <img src={resolveUrl("assets/images/image2.png")} alt="Capacity Building" className="card-image" />
        <div className="card-content">
          <h3>Capacity Building</h3>
          <ul>
            <li>Strategic planning & writing workshops</li>
            <li>Proposal development training</li>
            <li>Organizational development support</li>
            <li>Leadership development programs</li>
          </ul>
        </div>
      </div>

      {/* Card 3 */}
      <div className="about-service-card">
        <img src={resolveUrl("assets/images/Digitaltrans.jpg")} alt="Digital Transformation" className="card-image" />
        <div className="card-content">
          <h3>Digital Transformation</h3>
          <ul>
            <li>Data analysis & insights</li>
            <li>Digital strategy development</li>
            <li>Technology integration support</li>
            <li>Digital literacy training</li>
          </ul>
        </div>
      </div>

      {/* Card 4 */}
      <div className="about-service-card">
        <img src={resolveUrl("assets/images/social.png")} alt="Social Impact" className="card-image" />
        <div className="card-content">
          <h3>Social Impact</h3>
          <ul>
            <li>Community engagement strategies</li>
            <li>Impact measurement & evaluation</li>
            <li>Stakeholder relationship building</li>
            <li>Sustainable development planning</li>
          </ul>
        </div>
      </div>

      {/* Card 5 */}
      <div className="about-service-card">
        <img src={resolveUrl("assets/images/rnd.jpg")} alt="Research & Development" className="card-image" />
        <div className="card-content">
          <h3>Research & Development</h3>
          <ul>
            <li>Evidence-based research studies</li>
            <li>Policy analysis & recommendations</li>
            <li>Best practices documentation</li>
            <li>Knowledge management systems</li>
          </ul>
        </div>
      </div>

      {/* Card 6 - NEW */}
      <div className="about-service-card">
        <img src={resolveUrl("assets/images/sustainability.jpg")} alt="Sustainability & Growth" className="card-image" />
        <div className="card-content">
          <h3>Sustainability & Growth</h3>
          <ul>
            <li>Green innovation strategies</li>
            <li>Climate-smart development</li>
            <li>Impact-driven partnerships</li>
            <li>Future-ready capacity building</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>


      {/* Process Section */}
      <section className="process-section">
  <div className="about-container">
    <h2>Our Approach</h2>
    <div className="process-content">
      <div>
        <img 
          src={resolveUrl("assets/images/42.jpg")} 
          alt="Our Process" 
          className="image-placeholder large" 
        />
        {/* New Image */}
        <img 
          src={resolveUrl("assets/images/DT.jpg")} 
          alt="Additional Process" 
          className="image-placeholder large" 
        />
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

      {/* Facilities Overview */}
      <section className="facilities-overview">
        <div className="about-container">
          <h2>Our Facilities & Services</h2>
          <div className="facilities-intro">
            <p>
              To successfully deliver our programs, we are setting up innovative hubs that are accessible, 
              inclusive, and youth-focused to support entrepreneurs from underserved communities.
            </p>
          </div>

          <div className="facilities-grid">
            <div className="facility-card">
              <div className="facility-number">1</div>
              <h3>Co-working Spaces</h3>
              <p>
                Vibrant community spaces with state-of-the-art amenities, comfortable workstations, 
                and flexible membership options that connect entrepreneurs and professionals.
              </p>
            </div>

            <div className="facility-card">
              <div className="facility-number">2</div>
              <h3>Creative Studios</h3>
              <p>
                Top-tier podcast, photography, and videography facilities equipped with professional-grade 
                technology, soundproofed rooms, and cutting-edge editing tools.
              </p>
            </div>

            <div className="facility-card">
              <div className="facility-number">3</div>
              <h3>Meeting Spaces</h3>
              <p>
                Thoughtfully designed rooms with modern technology and customizable layouts for 
                productive meetings, training sessions, and innovative brainstorming.
              </p>
            </div>

            <div className="facility-card">
              <div className="facility-number">4</div>
              <h3>Innovation Labs</h3>
              <p>
                Dedicated spaces for prototype development, testing, and innovation ecosystem 
                mapping with access to cutting-edge tools and resources.
              </p>
            </div>

            <div className="facility-card">
              <div className="facility-number">5</div>
              <h3>Training Centers</h3>
              <p>
                Modern educational facilities designed for capacity building workshops, 
                leadership development programs, and digital literacy training.
              </p>
            </div>

            <div className="facility-card">
              <div className="facility-number">6</div>
              <h3>Community Hubs</h3>
              <p>
                Conference halls, exhibition areas, and networking spaces that foster 
                collaboration and create memorable experiences for events and gatherings.
              </p>
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
              <img src={resolveUrl("assets/Partners/digit.png")} alt="Digit" className="image-placeholder partner" />
            </div>

            <div className="partner-logo">
              <img src={resolveUrl("assets/Partners/helpAlliance.png")} alt="Help Alliance" className="image-placeholder partner" />
            </div>

            <div className="partner-logo">
              <img src={resolveUrl("assets/Partners/hurupay.png")} alt="HuruPay" className="image-placeholder partner" />
            </div>

            <div className="partner-logo">
              <img src={resolveUrl("assets/Partners/KGSA.jpg")} alt="KGSA" className="image-placeholder partner" />
            </div>

            <div className="partner-logo">
              <img src={resolveUrl("assets/Partners/partner1.png")} alt="Partner 1" className="image-placeholder partner" />
            </div>

            <div className="partner-logo">
              <img src={resolveUrl("assets/Partners/partner2.png")} alt="Partner 2" className="image-placeholder partner" />
            </div>

            <div className="partner-logo">
              <img src={resolveUrl("assets/Partners/partner3.png")} alt="Partner 3" className="image-placeholder partner" />
            </div>

            <div className="partner-logo">
              <img src={resolveUrl("assets/Partners/partner5.png")} alt="Partner 5" className="image-placeholder partner" />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="facilities-overview">
        <div className="about-container">
          <h2>Our Core Values</h2>
          <div className="facilities-intro">
          </div>

          <div className="facilities-grid">
            <div className="facility-card">
              <div className="facility-number">I</div>
              <h3>Collaboration</h3>
              <p>
                We believe in the power of partnerships and co-creation to develop solutions that truly meet community needs.
              </p>
            </div>

            <div className="facility-card">
              <div className="facility-number">II</div>
              <h3>Innovation</h3>
              <p>
                We embrace creative approaches and emerging technologies to address complex social challenges.
              </p>
            </div>

            <div className="facility-card">
              <div className="facility-number">III</div>
              <h3>Evidence-Based</h3>
              <p>
                Our work is grounded in research, data analysis, and rigorous evaluation methodologies.
              </p>
            </div>

            <div className="facility-card">
              <div className="facility-number">IV</div>
              <h3>Sustainability</h3>
              <p>
                We design interventions that create lasting change and build local capacity for continued impact.
              </p>
            </div>

            <div className="facility-card">
              <div className="facility-number">V</div>
              <h3>Transparency</h3>
              <p>
                We maintain open communication and accountability in all our partnerships and projects.
              </p>
            </div>

            <div className="facility-card">
              <div className="facility-number">VI</div>
              <h3> Inclusivity</h3>
              <p>
                We ensure that our programs are accessible and beneficial to diverse communities and stakeholders.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Get Involved CTA */}
      <section className="get-involved" id="contact">
        <div className="container">
          <div className="cta-content">
            <h2>Work with Shield</h2>
            <p>
              Ready to transform your organization's capacity and drive meaningful impact?
              Let's collaborate to design innovative solutions tailored to your unique challenges.
            </p>
            {/* <div className="cta-buttons">
              <a href="/podcast" className="btn btn-secondary">Share Your Story</a>
            </div> */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;