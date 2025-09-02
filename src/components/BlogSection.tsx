import React from 'react';
import BlogArticle from './BlogArticle';
import './BlogSection.css';

const BlogSection: React.FC = () => {
  const blogData = [
    {
      id: 1,
      title: "Joining Up For The Benefit Of Elephants across East Africa",
      description: "Impact of human-centered design on sustainable community solutions and innovation.",
      category: "PROJECTS",
      imageUrl: "https://images.unsplash.com/photo-1676275773828-19040454afab?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTAwNDR8MHwxfHNlYXJjaHwzfHxidXNpbmVzcyUyMG1lZXRpbmclMjBvZmZpY2UlMjB0ZWFtfGVufDB8MHx8fDE3NTY4MDcxODR8MA&ixlib=rb-4.1.0&q=85",
      imageAlt: "Professional business meeting, modern office setting, diverse team collaboration - Walls.io on Unsplash",
      link: "/blog",
      date: "November 22, 2022"
    },
    {
      id: 2,
      title: "We're Hiring - Communications Manager - Volunteer",
      description: "How technology hubs bridge the digital divide for marginalized youth in underserved communities.",
      category: "NEWS",
      imageUrl: "https://images.unsplash.com/photo-1657972170499-3376d9eb8f65?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTAwNDR8MHwxfHNlYXJjaHwzfHx0ZWNobm9sb2d5JTIwaW5ub3ZhdGlvbiUyMGRpZ2l0YWwlMjB3b3Jrc3BhY2V8ZW58MHwwfHxibHVlfDE3NTY4MDcxODN8MA&ixlib=rb-4.1.0&q=85",
      imageAlt: "Technology innovation, digital transformation, modern workspace - Boitumelo on Unsplash",
      link: "/blog",
      date: "November 22, 2022"
    },
    {
      id: 3,
      title: "Successful Strategies For Animal Welfare Improvements",
      description: "Success stories from SHIELD graduates who created thriving enterprises and social impact.",
      category: "ARTICLES",
      imageUrl: "https://images.unsplash.com/photo-1545886082-e66c6b9e011a?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTAwNDR8MHwxfHNlYXJjaHwyfHx5b3V0aCUyMGVudHJlcHJlbmV1cnNoaXAlMjBzdGFydHVwJTIweW91bmclMjBwZW9wbGV8ZW58MHwwfHx8MTc1NjgwNzE4M3ww&ixlib=rb-4.1.0&q=85",
      imageAlt: "Youth entrepreneurship, young people working, startup environment - Dieu Huyen Hoang on Unsplash",
      link: "/blog",
      date: "November 22, 2022"
    },
    {
      id: 4,
      title: "Camel Care and Welfare – What's it all about?",
      description: "Research reveals systemic challenges preventing innovation ecosystems in underserved areas.",
      category: "ARTICLES",
      imageUrl: "https://images.unsplash.com/photo-1548782033-3ac3a62ece8d?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTAwNDR8MHwxfHNlYXJjaHwxfHxjb21tdW5pdHklMjBkZXZlbG9wbWVudCUyMHNvY2lhbCUyMGltcGFjdCUyMGRpdmVyc2V8ZW58MHwwfHx8MTc1NjgwNzE4M3ww&ixlib=rb-4.1.0&q=85",
      imageAlt: "Community development, social impact, diverse community gathering - Kameron Kincade on Unsplash",
      link: "/blog",
      date: "November 21, 2022"
    }
  ];

  return (
    <section className="blog-section">
      <div className="container">
        <div className="blog-section-header">
          <h2>Latest News and Articles</h2>
        </div>
        <div className="blog-grid">
          <div className="blog-column">
            {blogData.slice(0, 2).map((blog) => (
              <BlogArticle
                key={blog.id}
                title={blog.title}
                description={blog.description}
                category={blog.category}
                imageUrl={blog.imageUrl}
                imageAlt={blog.imageAlt}
                link={blog.link}
                date={blog.date}
              />
            ))}
          </div>
          <div className="blog-column">
            {blogData.slice(2, 4).map((blog) => (
              <BlogArticle
                key={blog.id}
                title={blog.title}
                description={blog.description}
                category={blog.category}
                imageUrl={blog.imageUrl}
                imageAlt={blog.imageAlt}
                link={blog.link}
                date={blog.date}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;