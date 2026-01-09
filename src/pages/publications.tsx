import "./publications.css";

const Publications = () => {
  return (
    <div className="publications">
      {/* Hero Section */}
      <section className="publications-hero">
        <div className="container">
          <div className="hero-text">
            <h1>View Our 2024 Impact Report Now</h1>
            <a href="#" className="btn btn-primary">
              Download Report
            </a>
          </div>
          <div className="hero-image">
            <img src={new URL('/assets/images/pub.png', import.meta.url).href} alt="SHIELD Team 2024" />
          </div>
        </div>
      </section>

      {/* Students Building Section */}
      <section className="students-building">
        <div className="container">
          <h2>See What Our Students at SHIELD are building</h2>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="portfolio-section">
        <div className="container">
          <h2>SHIELD Portfolio</h2>
          
          <div className="portfolio-layout">
            {/* Row 1 - Calendar.io (left) + AVACADO (right) */}
            <div className="portfolio-row row-1">
              <div className="portfolio-item calendar-item">
                <div className="portfolio-image">
                  <img src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&auto=format&fit=crop" alt="Calendar App" />
                </div>
                <div className="portfolio-info">
                  <h3>Calender.io</h3>
                  <span className="portfolio-category">App Design</span>
                </div>
              </div>
              
              <div className="portfolio-item avacado-item">
                <div className="portfolio-image">
                  <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1000&auto=format&fit=crop" alt="AVACADO Web" />
                </div>
                <div className="portfolio-info">
                  <h3>AVACADO</h3>
                  <span className="portfolio-category">Web Design</span>
                </div>
              </div>
            </div>

            {/* Row 2 - Full Width AVACADO */}
            <div className="portfolio-row row-2">
              <div className="portfolio-item full-width">
                <div className="portfolio-image">
                  <img src="https://images.unsplash.com/photo-1551650975-87deedd944c3?w=1400&auto=format&fit=crop" alt="AVACADO App Screens" />
                </div>
                <div className="portfolio-info">
                  <h3>AVACADO</h3>
                  <span className="portfolio-category">Web Design</span>
                </div>
              </div>
            </div>

            {/* Row 3 - Calendar.io (left) + AVACADO (right) */}
            <div className="portfolio-row row-3">
              <div className="portfolio-item calendar-item">
                <div className="portfolio-image">
                  <img src="https://images.unsplash.com/photo-1559028012-481c04fa702d?w=800&auto=format&fit=crop" alt="Calendar Dashboard" />
                </div>
                <div className="portfolio-info">
                  <h3>Calender.io</h3>
                  <span className="portfolio-category">App Design</span>
                </div>
              </div>
              
              <div className="portfolio-item avacado-item">
                <div className="portfolio-image">
                  <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1000&auto=format&fit=crop" alt="AVACADO Platform" />
                </div>
                <div className="portfolio-info">
                  <h3>AVACADO</h3>
                  <span className="portfolio-category">Web Design</span>
                </div>
              </div>
            </div>

            {/* Row 4 - Full Width AVACADO */}
            <div className="portfolio-row row-4">
              <div className="portfolio-item full-width green-bg">
                <div className="portfolio-image">
                  <img src="https://images.unsplash.com/photo-1551650975-87deedd944c3?w=1400&auto=format&fit=crop" alt="AVACADO Mobile" />
                </div>
                <div className="portfolio-info">
                  <h3>AVACADO</h3>
                  <span className="portfolio-category">Web Design</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


    </div>
  );
};

export default Publications;