import "./publications.css";

const Publications = () => {
  return (
    <div className="publications">
      {/* Hero Section */}
      <section className="publications-hero">
        <div className="container">
          <div className="hero-text">
            <h1>View Our 2024 Impact Report Now</h1>
            <a href="https://shieldintl.org/wp-content/uploads/2025/04/SHIELD-2024-ANNUAL-REPORT-2.pdf" className="btn btn-primary" target="_blank" rel="noopener noreferrer">
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
            {/* Row 1 - Tyde (left) + Kibra Connect (right) */}
            <div className="portfolio-row row-1">
              <div className="portfolio-item calendar-item">
                <div className="portfolio-image">
                  <img src={new URL('/assets/images/projects/Tyde_appdesign.jpeg', import.meta.url).href} alt="Tyde App Design" />
                </div>
                <div className="portfolio-info">
                  <h3>Tyde</h3>
                  <span className="portfolio-category">App Design</span>
                </div>
              </div>
              
              <div className="portfolio-item avacado-item">
                <div className="portfolio-image">
                  <img src={new URL('/assets/images/projects/Visit Uganda.png', import.meta.url).href} alt="Visit Uganda Web Design" />
                </div>
                <div className="portfolio-info">
                  <h3>Visit Uganda</h3>
                  <span className="portfolio-category">Web Design</span>
                </div>
              </div>
            </div>

            {/* Row 2 - Full Width Nyota Treasures */}
            <div className="portfolio-row row-2">
              <div className="portfolio-item full-width">
                <div className="portfolio-image">
                  <img src={new URL('/assets/images/projects/Nyota Treasures.png', import.meta.url).href} alt="Nyota Treasures Web Design" />
                </div>
                <div className="portfolio-info">
                  <h3>Nyota Treasures</h3>
                  <span className="portfolio-category">Web Design</span>
                </div>
              </div>
            </div>


            {/* Row 4 - Full Width Slum Treasures */}
            <div className="portfolio-row row-4">
              <div className="portfolio-item full-width green-bg">
                <div className="portfolio-image">
                  <img src={new URL('/assets/images/projects/Slum Treasures.png', import.meta.url).href} alt="Slum Treasures Web Design" />
                </div>
                <div className="portfolio-info">
                  <h3>Slum Treasures</h3>
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