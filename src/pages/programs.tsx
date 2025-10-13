// src/pages/Programs.jsx
import "./Programs.css";

const Programs = () => {
  return (
    <div className="programs-page">
      {/* Hero Section */}

       <section className="programs-hero">
        <video className="programs-hero-video" autoPlay muted loop playsInline>
          <source src="/assets/videos/site1.mp4" type="video/mp4" />
        </video>
        <div className="programs-hero-overlay">
          <div className="programs-container">
            <div className="programs-hero-content">
              <h1>Learning Programs</h1>
              <p>
                From entrepreneurship bootcamps to cutting-edge software development, 
                design thinking workshops to business mentorship - we offer comprehensive 
                programs that turn ambitious ideas into real-world impact. Join our community 
                of innovators, creators, and change-makers building the future of Africa.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Programs Section */}
     <section className="main-programs-section" style={{backgroundColor: '#ffffff', padding: '100px 0'}}>
  <div className="programs-container">
    <div style={{textAlign: 'center', marginBottom: '60px'}}>
      <p style={{color: '#666666', fontSize: '0.9rem', fontWeight: '500', marginBottom: '10px', letterSpacing: '2px', textTransform: 'uppercase'}}>
        Our Focus Areas
      </p>
    </div>
    <div className="programs-grid">
      {/* Card - Design Thinking */}
      <div style={{
        backgroundColor: '#063762',
        borderRadius: '10px',
        overflow: 'hidden',
        boxShadow: '0 8px 30px rgba(0, 0, 0, 0.1)',
        transition: 'transform 0.3s ease',
        height: 'fit-content'
      }}>
        <div style={{padding: '20px', color: 'white'}}>
          <h3 style={{fontSize: '1.1rem', fontWeight: '600', marginBottom: '10px', color: 'white'}}>
            Design Thinking Programs
          </h3>
          <p style={{fontSize: '0.85rem', lineHeight: '1.4', margin: '0', color: '#e2e8f0'}}>
            Empowering youth with collaborative problem-solving skills to pioneer community solutions.
          </p>
        </div>
      </div>
      
      {/* Card - SHIELD Entrepreneurship */}
      <div style={{
        backgroundColor: '#063762',
        borderRadius: '10px',
        overflow: 'hidden',
        boxShadow: '0 8px 30px rgba(0, 0, 0, 0.1)',
        transition: 'transform 0.3s ease',
        height: 'fit-content'
      }}>
        <div style={{padding: '20px', color: 'white'}}>
          <h3 style={{fontSize: '1.1rem', fontWeight: '600', marginBottom: '10px', color: 'white'}}>
            SHIELD Entrepreneurship Programs
          </h3>
          <p style={{fontSize: '0.85rem', lineHeight: '1.4', margin: '0', color: '#e2e8f0'}}>
            Supporting businesses with personalized training and mentorship. Building capacity to operate successfully, unlock financing, and scale to new levels.
          </p>
        </div>
      </div>
      
     
      
      {/* Card - SIDLabs */}
      <div style={{
        backgroundColor: '#063762',
        borderRadius: '10px',
        overflow: 'hidden',
        boxShadow: '0 8px 30px rgba(0, 0, 0, 0.1)',
        transition: 'transform 0.3s ease',
        height: 'fit-content'
      }}>
        <div style={{padding: '20px', color: 'white'}}>
          <h3 style={{fontSize: '1.1rem', fontWeight: '600', marginBottom: '10px', color: 'white'}}>
            SIDLabs Research & Development
          </h3>
          <p style={{fontSize: '0.85rem', lineHeight: '1.4', margin: '0', color: '#e2e8f0'}}>
            Innovation hub driving societal impact through collaborative spaces, transformative programs, and cutting-edge development initiatives.
          </p>
        </div>
      </div>
       {/* Card - Software Development */}
      <div style={{
        backgroundColor: '#063762',
        borderRadius: '10px',
        overflow: 'hidden',
        boxShadow: '0 8px 30px rgba(0, 0, 0, 0.1)',
        transition: 'transform 0.3s ease',
        height: 'fit-content'
      }}>
        <div style={{padding: '20px', color: 'white'}}>
          <h3 style={{fontSize: '1.1rem', fontWeight: '600', marginBottom: '10px', color: 'white'}}>
            Software Development
          </h3>
          <p style={{fontSize: '0.85rem', lineHeight: '1.4', margin: '0', color: '#e2e8f0'}}>
            Career-focused certifications and business acumen to transform your ideas into reality.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* Ongoing Courses Section */}
      <section className="specialty-programs-section">
        <div className="programs-container">
          <h2>Ongoing Courses</h2>
          
          <div className="specialty-program-feature">
            <div className="specialty-program-text">
              <h3>Digital Marketing & Social Media</h3>
              <p>
                Master the art of digital marketing with our comprehensive course covering
                social media strategy, content creation, analytics, and digital advertising.
                Perfect for entrepreneurs and small business owners looking to expand their
                online presence and reach new customers.
              </p>
              <p><strong>Duration:</strong> 8 weeks • <strong>Format:</strong> Hybrid (Online & In-person)</p>
              <a href="/courses/digital-marketing" className="programs-btn programs-btn-outline">
                Join Course
              </a>
            </div>
            <div className="specialty-program-image">
              <img 
                src="https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop&crop=center" 
                alt="Digital Marketing Workshop" 
                style={{width: '100%', height: '300px', objectFit: 'cover', borderRadius: '12px'}}
              />
            </div>
          </div>

          <div className="specialty-program-feature reverse-layout">
            <div className="specialty-program-text">
              <h3>Web Development Bootcamp</h3>
              <p>
                Learn modern web development from scratch. This intensive course covers
                HTML, CSS, JavaScript, React, and backend development. Build real projects
                and create a portfolio that will help you land your first tech job or
                launch your own web development business.
              </p>
              <p><strong>Duration:</strong> 12 weeks • <strong>Format:</strong> Online with mentorship</p>
              <a href="/courses/web-development" className="programs-btn programs-btn-outline">
                Join Course
              </a>
            </div>
            <div className="specialty-program-image">
              <img 
                src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop&crop=center" 
                alt="Web Development Session" 
                style={{width: '100%', height: '300px', objectFit: 'cover', borderRadius: '12px'}}
              />
            </div>
          </div>

          {/* <div className="specialty-program-feature">
            <div className="specialty-program-text">
              <h3>Business Development & Financial Literacy</h3>
              <p>
                Essential business skills for aspiring entrepreneurs. Learn business planning,
                financial management, accounting basics, and funding strategies. Ideal for
                those looking to start or grow their business with solid financial foundations.
              </p>
              <p><strong>Duration:</strong> 6 weeks • <strong>Format:</strong> Weekend workshops</p>
              <a href="/courses/business-development" className="programs-btn programs-btn-outline">
                Join Course
              </a>
            </div>
            <div className="specialty-program-image">
              <img 
                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop&crop=center" 
                alt="Business Training Session" 
                style={{width: '100%', height: '300px', objectFit: 'cover', borderRadius: '12px'}}
              />
            </div>
          </div>

          <div className="specialty-program-feature reverse-layout">
            <div className="specialty-program-text">
              <h3>Design Thinking & Innovation</h3>
              <p>
                Develop problem-solving skills using design thinking methodology.
                Learn to identify community challenges, ideate solutions, prototype,
                and test your ideas. Perfect for social entrepreneurs and community leaders.
              </p>
              <p><strong>Duration:</strong> 4 weeks • <strong>Format:</strong> Interactive workshops</p>
              <a href="/courses/design-thinking" className="programs-btn programs-btn-outline">
                Join Course
              </a>
            </div>
            <div className="specialty-program-image">
              <img 
                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&h=400&fit=crop&crop=center" 
                alt="Design Thinking Workshop" 
                style={{width: '100%', height: '300px', objectFit: 'cover', borderRadius: '12px'}}
              />
            </div>
          </div> */}
        </div>
      </section>

      {/* Online Courses Section */}
      <section className="program-categories-section">
        <div className="programs-container">
          <h2>Online Courses</h2>
          <div className="program-categories-grid">
            <div className="program-category-card">
              <img 
                src="https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=250&fit=crop&crop=center" 
                alt="Canva Comprehensive Course" 
                style={{width: '100%', height: '200px', objectFit: 'cover', borderRadius: '8px', marginBottom: '20px'}}
              />
              <h3>Canva Comprehensive Course</h3>
              <p>
                Master the art of visual design with Canva's powerful tools. Learn to create 
                stunning graphics, social media posts, presentations, and marketing materials. 
                Perfect for entrepreneurs, marketers, and content creators looking to enhance 
                their visual communication skills.
              </p>
              <p><strong>Duration:</strong> 6 weeks • <strong>Self-paced</strong></p>
              <a href="https://shieldintl.org/academy/" className="programs-btn programs-btn-primary" target="_blank" rel="noopener noreferrer">
                Enroll Now
              </a>
            </div>

            <div className="program-category-card">
              <img 
                src="https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=400&h=250&fit=crop&crop=center" 
                alt="Blockchain Development Course" 
                style={{width: '100%', height: '200px', objectFit: 'cover', borderRadius: '8px', marginBottom: '20px'}}
              />
              <h3>Introduction to Blockchain with Celo and Solidity Development</h3>
              <p>
                Dive into the world of blockchain technology and smart contract development. 
                Learn Solidity programming, understand the Celo blockchain ecosystem, and 
                build decentralized applications. Ideal for developers looking to enter 
                the Web3 space and create innovative blockchain solutions.
              </p>
              <p><strong>Duration:</strong> 12 weeks • <strong>Self-paced</strong></p>
              <a href="https://shieldintl.org/academy/" className="programs-btn programs-btn-primary" target="_blank" rel="noopener noreferrer">
                Enroll Now
              </a>
            </div>

            <div className="program-category-card">
              <img 
                src="https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=400&h=250&fit=crop&crop=center" 
                alt="Database Development Course" 
                style={{width: '100%', height: '200px', objectFit: 'cover', borderRadius: '8px', marginBottom: '20px'}}
              />
              <h3>Database Design & Programming with SQL</h3>
              <p>
                Master database fundamentals and SQL programming. Learn to design efficient 
                database schemas, write complex queries, and manage data effectively. 
                Essential skills for backend developers, data analysts, and anyone working 
                with data-driven applications.
              </p>
              <p><strong>Duration:</strong> 10 weeks • <strong>Self-paced</strong></p>
              <a href="https://shieldintl.org/academy/" className="programs-btn programs-btn-primary" target="_blank" rel="noopener noreferrer">
                Enroll Now
              </a>
            </div>

            <div className="program-category-card">
              <img 
                src="https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=400&h=250&fit=crop&crop=center" 
                alt="Python Programming Course" 
                style={{width: '100%', height: '200px', objectFit: 'cover', borderRadius: '8px', marginBottom: '20px'}}
              />
              <h3>Python Programming</h3>
              <p>
                Learn Python from basics to advanced concepts. Cover data structures, 
                algorithms, web development with Django/Flask, data analysis, and automation. 
                Perfect for beginners starting their programming journey or professionals 
                looking to add Python to their skill set.
              </p>
              <p><strong>Duration:</strong> 14 weeks • <strong>Self-paced</strong></p>
              <a href="https://shieldintl.org/academy/" className="programs-btn programs-btn-primary" target="_blank" rel="noopener noreferrer">
                Enroll Now
              </a>
            </div>

            <div className="program-category-card">
              <img 
                src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=250&fit=crop&crop=center" 
                alt="Web Development Course" 
                style={{width: '100%', height: '200px', objectFit: 'cover', borderRadius: '8px', marginBottom: '20px'}}
              />
              <h3>Web Development</h3>
              <p>
                Build modern, responsive websites and web applications from scratch. 
                Learn HTML, CSS, JavaScript, React, and backend technologies. 
                Includes hands-on projects, portfolio development, and industry best practices 
                to prepare you for a career in web development.
              </p>
              <p><strong>Duration:</strong> 16 weeks • <strong>Self-paced</strong></p>
              <a href="https://shieldintl.org/academy/" className="programs-btn programs-btn-primary" target="_blank" rel="noopener noreferrer">
                Enroll Now
              </a>
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
            </div>

            <div className="program-process-step">
              <div className="process-step-number">2</div>
              <div className="program-icon">🎯</div>
              <h3>Intensive Training</h3>
              <p>
                Hands-on workshops, practical sessions, and mentorship programs
                delivered by industry experts and experienced practitioners.
              </p>
            </div>

            <div className="program-process-step">
              <div className="process-step-number">3</div>
              <div className="program-icon">🚀</div>
              <h3>Implementation & Support</h3>
              <p>
                Ongoing support for project implementation, business launch,
                and continuous mentorship for sustainable growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Program Impact Stats */}
      {/* <section className="program-impact-section">
        <div className="programs-container">
          <h2>Program Impact</h2>
          <div className="program-impact-grid">
            <div className="program-impact-item">
              <div className="impact-number">250+</div>
              <div className="impact-label">Youth Trained</div>
            </div>
            <div className="program-impact-item">
              <div className="impact-number">5+</div>
              <div className="impact-label">Enterprises Created</div>
            </div>
            <div className="program-impact-item">
              <div className="impact-number">5</div>
              <div className="impact-label">Events Hosted</div>
            </div>
            
          </div>
        </div>
      </section> */}

      {/* Program Features */}
      <section className="program-features-section">
        <div className="programs-container">
          <h2>What Makes Our Programs Unique</h2>
          <div className="program-features-grid">
            <div className="program-feature-card">
              <img src="public\favicon.png" alt="" />
              <h3>Community-Centered Approach</h3>
              <p>
                All programs are designed with deep community input and focus on
                solving real local challenges while building local capacity.
              </p>
            </div>

            <div className="program-feature-card">
              <img src="public\favicon.png" alt="" />
              <h3>Iterative Learning</h3>
              <p>
                Using design thinking principles, participants learn through
                prototyping, testing, and refining their ideas and solutions.
              </p>
            </div>

            <div className="program-feature-card">
              <img src="public\favicon.png" alt="" />
              <h3>Peer-to-Peer Learning</h3>
              <p>
                Collaborative learning environments where participants learn
                from each other's experiences and build lasting professional networks.
              </p>
            </div>

            <div className="program-feature-card">
              <img src="public\favicon.png" alt="" />
              <h3>Measurable Impact</h3>
              <p>
                All programs include clear metrics and evaluation frameworks
                to ensure continuous improvement and demonstrable outcomes.
              </p>
            </div>

            <div className="program-feature-card">
              <img src="public\favicon.png" alt="" />
              <h3>Sustainable Solutions</h3>
              <p>
                Focus on creating long-term, sustainable solutions that continue
                to benefit communities long after program completion.
              </p>
            </div>

            <div className="program-feature-card">
              <img src="public\favicon.png" alt="" />
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
              <h2>How to Get Started</h2>
              <p>
                We offer flexible learning options to accommodate different schedules
                and learning preferences. Choose the format that works best for you.
              </p>
              <div className="application-requirements">
                <h4>Learning Options:</h4>
                <ul>
                  <li>Apply for comprehensive online courses with mentorship</li>
                  <li>Join ongoing courses with flexible schedules</li>
                  <li>Participate in weekend workshops and bootcamps</li>
                  <li>Access hybrid programs combining online and in-person training</li>
                </ul>
              </div>
              <div className="application-requirements">
                <h4>Requirements:</h4>
                <ul>
                  <li>Commitment to community development</li>
                  <li>Basic literacy and numeracy skills</li>
                  <li>Willingness to learn and collaborate</li>
                  <li>Access to internet for online components</li>
                </ul>
              </div>
              {/* <div className="program-application-buttons">
                <a href="/courses" className="programs-btn programs-btn-primary">
                  Browse Courses
                </a>
                <a href="/contact" className="programs-btn programs-btn-outline">
                  Contact Us
                </a>
              </div> */}
            </div>
            <div className="program-application-image">
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=500&fit=crop&crop=center" 
                alt="Students learning together" 
                style={{width: '100%', height: '100%', objectFit: 'cover', borderRadius: '12px', minHeight: '500px'}}
              />
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
            {/* <div className="programs-cta-buttons">
              <a href="/courses" className="programs-btn programs-btn-primary">
                Start Your Journey
              </a>
              <a href="/donate" className="programs-btn programs-btn-secondary">
                Support Our Mission
              </a>
            </div> */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Programs;