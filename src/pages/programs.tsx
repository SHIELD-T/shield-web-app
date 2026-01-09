import { useState } from "react";
import "./programs.css";
import { resolveUrl } from "../utils/assetUtils";

const Programs = () => {
  const [testimonialIndex, setTestimonialIndex] = useState(0);

  const courses = [
    {
      id: 1,
      title: "Canva Comprehensive Course",
      description: "This course covers the whole of how the canva tool can help you become a better designer or help with your entrepreneurship",
      level: "Intermediate",
      rating: 5,
      instructor: "admin",
      image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800&auto=format&fit=crop",
      saved: false
    },
    {
      id: 2,
      title: "Canva Comprehensive Course",
      description: "This course covers the whole of how the canva tool can help you become a better designer or help with your entrepreneurship",
      level: "Intermediate",
      rating: 5,
      instructor: "admin",
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&auto=format&fit=crop",
      saved: false
    },
    {
      id: 3,
      title: "Canva Comprehensive Course",
      description: "This course covers the whole of how the canva tool can help you become a better designer or help with your entrepreneurship",
      level: "Intermediate",
      rating: 5,
      instructor: "admin",
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&auto=format&fit=crop",
      saved: true
    },
    {
      id: 4,
      title: "Canva Comprehensive Course",
      description: "This course covers the whole of how the canva tool can help you become a better designer or help with your entrepreneurship",
      level: "Intermediate",
      rating: 5,
      instructor: "admin",
      image: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=800&auto=format&fit=crop",
      saved: false
    },
    {
      id: 5,
      title: "Canva Comprehensive Course",
      description: "This course covers the whole of how the canva tool can help you become a better designer or help with your entrepreneurship",
      level: "Intermediate",
      rating: 5,
      instructor: "admin",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&auto=format&fit=crop",
      saved: false
    },
    {
      id: 6,
      title: "Canva Comprehensive Course",
      description: "This course covers the whole of how the canva tool can help you become a better designer or help with your entrepreneurship",
      level: "Intermediate",
      rating: 5,
      instructor: "admin",
      image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=800&auto=format&fit=crop",
      saved: false
    }
  ];

  const testimonials = [
    {
      id: 1,
      text: "SHIELD LMS makes learning so easy! I can access my courses anywhere, and everything is super secure and user-friendly",
      name: "SHIELD",
      role: "Student",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&auto=format&fit=crop"
    },
    {
      id: 2,
      text: "SHIELD LMS makes learning so easy! I can access my courses anywhere, and everything is super secure and user-friendly",
      name: "SHIELD",
      role: "Student",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&auto=format&fit=crop"
    },
    {
      id: 3,
      text: "SHIELD LMS makes learning so easy! I can access my courses anywhere, and everything is super secure and user-friendly",
      name: "SHIELD",
      role: "Student",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&auto=format&fit=crop"
    },
    {
      id: 4,
      text: "SHIELD LMS makes learning so easy! I can access my courses anywhere, and everything is super secure and user-friendly",
      name: "SHIELD",
      role: "Student",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&auto=format&fit=crop"
    }
  ];

  const nextTestimonial = () => {
    setTestimonialIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setTestimonialIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const renderStars = (rating: number) => {
    return [...Array(rating)].map((_, index) => (
      <svg key={index} width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M10 2L12.245 7.905L18.5 8.755L14.25 12.905L15.29 19.11L10 16.155L4.71 19.11L5.75 12.905L1.5 8.755L7.755 7.905L10 2Z" fill="#E48218"/>
      </svg>
    ));
  };

  return (
    <div className="programs">
      {/* Hero Section */}
      <section className="programs-hero">
        <div className="container">
          <div className="hero-layout">
            <div className="hero-text">
              <h1>Learn Today, Be a Champion Tomorrow.</h1>
              <p>Welcome to SHIELD LMS – the future of secure, efficient, and impactful learning.</p>
              <ul className="hero-features">
                <li>Exclusive online course</li>
                <li>Best instructor on live course</li>
                <li>Get certificate</li>
              </ul>
              <a href="#" className="btn btn-primary">
                Get started
              </a>
            </div>
            <div className="hero-image">
              <img src={resolveUrl("assets/images/wwa.JPG")} alt="Students Learning" />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="featured-courses">
        <div className="container">
          <h2>Featured Courses</h2>
          
          <div className="courses-grid">
            {courses.map((course) => (
              <div key={course.id} className="course-card">
                <div className="course-image">
                  <img src={course.image} alt={course.title} />
                  <span className="course-level">{course.level}</span>
                  <button className={`save-btn ${course.saved ? 'saved' : ''}`}>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path d="M4 5C4 3.89543 4.89543 3 6 3H14C15.1046 3 16 3.89543 16 5V17L10 13L4 17V5Z" 
                        fill={course.saved ? "#292D32" : "#FFFFFF"} 
                        stroke="#292D32" 
                        strokeWidth="1.5"/>
                    </svg>
                  </button>
                </div>
                
                <div className="course-content">
                  <div className="course-rating">
                    {renderStars(course.rating)}
                  </div>
                  
                  <h3>{course.title}</h3>
                  <p>{course.description}</p>
                  
                  <div className="course-instructor">
                    <div className="instructor-avatar"></div>
                    <span>By {course.instructor}</span>
                  </div>
                  
                  <button className="enroll-btn">Enroll Course</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Learn From Anywhere */}
      <section className="learn-anywhere">
        <div className="container">
          <div className="learn-layout">
            <div className="learn-text">
              <h2>Learn From anywhere</h2>
              <p>
                With SHIELD LMS, your learning journey knows no limits. Access courses, connect with instructors, and engage with peers from any device, anywhere in the world. Whether you're at home, at work, or on the go, your classroom is wherever you need it to be flexible, secure, and always accessible.
              </p>
              
              <div className="learn-stats">
                <div className="stat-item">
                  <div className="stat-number">10+</div>
                  <div className="stat-label">Tutors</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">20+</div>
                  <div className="stat-label">Enrolled</div>
                </div>
              </div>
            </div>
            <div className="learn-image">
              <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&auto=format&fit=crop" alt="Learning Environment" />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials">
        <div className="container">
          <div className="testimonials-header">
            <p className="testimonials-subtitle">Don't Just take our word for it</p>
            <h2>Hear what people have to say</h2>
          </div>
          
          <div className="testimonials-carousel">
            <div className="testimonials-track">
              {testimonials.map((testimonial) => (
                <div 
                  key={testimonial.id} 
                  className="testimonial-card"
                  style={{
                    transform: `translateX(-${testimonialIndex * 100}%)`,
                    transition: 'transform 0.5s ease'
                  }}
                >
                  <div className="testimonial-avatar">
                    <img src={testimonial.avatar} alt={testimonial.name} />
                  </div>
                  <p className="testimonial-text">{testimonial.text}</p>
                  <div className="testimonial-author">
                    <h4>{testimonial.name}</h4>
                    <span>{testimonial.role}</span>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="testimonials-nav">
              <button className="nav-btn prev" onClick={prevTestimonial}>
                <svg width="32" height="18" viewBox="0 0 32 18" fill="none">
                  <path d="M6 9L26 9M6 9L11 4M6 9L11 14" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </button>
              <button className="nav-btn next" onClick={nextTestimonial}>
                <svg width="32" height="18" viewBox="0 0 32 18" fill="none">
                  <path d="M26 9L6 9M26 9L21 4M26 9L21 14" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="programs-cta">
        <div className="container">
          <div className="cta-buttons">
            <a href="#" className="btn btn-primary">Login</a>
            <a href="#" className="btn btn-outline">Apply to SHIELD</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Programs;