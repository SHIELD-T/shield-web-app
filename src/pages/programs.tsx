import "./programs.css";
import { resolveUrl } from "../utils/assetUtils";

const Programs = () => {

  const courses = [
    {
      id: 1,
      title: "Canva Comprehensive Course",
      description: "This course covers the whole of how the canva tool can help you become a better designer or help with your entrepreneurship",
      level: "Intermediate",
      rating: 5,
      instructor: "admin",
      image: resolveUrl("assets/images/Courses/canva.jpeg"),
      saved: false
    },
    {
      id: 2,
      title: "Introduction to Blockchain with Celo and Solidity Development",
      description: "Learn the fundamentals of blockchain technology, smart contracts, and development using Celo and Solidity",
      level: "Intermediate",
      rating: 5,
      instructor: "admin",
      image: resolveUrl("assets/images/Courses/block.jpg"),
      saved: false
    },
    {
      id: 3,
      title: "Database Design and Programming (SQL)",
      description: "Master database design principles and SQL programming for efficient data management",
      level: "Intermediate",
      rating: 5,
      instructor: "admin",
      image: resolveUrl("assets/images/Courses/db.png"),
      saved: true
    },
    {
      id: 4,
      title: "Python Programming",
      description: "Comprehensive Python programming course covering basics to advanced concepts",
      level: "Intermediate",
      rating: 5,
      instructor: "admin",
      image: resolveUrl("assets/images/Courses/python.jpg"),
      saved: false
    },
    {
      id: 5,
      title: "Web Development",
      description: "Full-stack web development course covering frontend and backend technologies",
      level: "Intermediate",
      rating: 5,
      instructor: "admin",
      image: resolveUrl("assets/images/Courses/web.jpg"),
      saved: false
    }
  ];

  const testimonials = [
    {
      id: 1,
      text: "SHIELD LMS makes learning so easy! I can access my courses anywhere, and everything is super secure and user-friendly",
      name: "Christine Kimani",
      role: "Student",
      avatar: resolveUrl("assets/images/Testimonials/Christine Kimani.JPG")
    },
    {
      id: 2,
      text: "The instructors at SHIELD are amazing! They're always available to help, and the course content is well-structured and engaging",
      name: "Felix Otieno",
      role: "Student",
      avatar: resolveUrl("assets/images/Testimonials/Felix Otieno.JPG")
    },
    {
      id: 3,
      text: "I've gained so many valuable skills through SHIELD. The hands-on projects really helped me understand concepts better and build my confidence",
      name: "Malcom Otieno",
      role: "Student",
      avatar: resolveUrl("assets/images/Testimonials/Malcom Otieno.JPG")
    },
    {
      id: 4,
      text: "Learning with SHIELD has been a game-changer for me. The platform is intuitive, and I love how I can learn at my own pace while still feeling connected to the community",
      name: "Tony",
      role: "Student",
      avatar: resolveUrl("assets/images/Testimonials/Tony.JPG")
    }
  ];


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
              <a href="https://shieldintl.org/academy/" className="btn btn-primary">
                Get started
              </a>
            </div>
            <div className="hero-image">
              <img src={resolveUrl("assets/images/Courses/img1.png")} alt="Students Learning" />
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
                  
                  <a href="https://shieldintl.org/academy/" className="enroll-btn">Enroll Course</a>
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
              <img src={resolveUrl("assets/images/Courses/lms.png")} alt="Learning Environment" />
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
          
          <div className="testimonials-scrollable">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="testimonial-card"
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
        </div>
      </section>

      {/* CTA Section */}
      <section className="programs-cta">
        <div className="container">
          <div className="cta-buttons">
            <a href="https://shieldintl.org/academy/" className="btn btn-primary">Login</a>
            <a href="https://shieldintl.org/academy/" className="btn btn-outline">Apply to SHIELD</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Programs;