import React, { useState, useRef } from 'react';
import BlogCard from './BlogCard';
import SectionHeader from './SectionHeader';
import './BlogSection.css';

const BlogSection: React.FC = () => {
  const [scrollIndex, setScrollIndex] = useState(0);
  const gridRef = useRef<HTMLDivElement>(null);

  const blogData = [
    {
      id: 1,
      title: "Design Thinking Transforming Youth Entrepreneurship",
      description: "Impact of human-centered design on sustainable community solutions and innovation.",
      category: "Innovation",
      imageUrl: "https://images.unsplash.com/photo-1676275773828-19040454afab?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTAwNDR8MHwxfHNlYXJjaHwzfHxidXNpbmVzcyUyMG1lZXRpbmclMjBvZmZpY2UlMjB0ZWFtfGVufDB8MHx8fDE3NTY4MDcxODR8MA&ixlib=rb-4.1.0&q=85",
      imageAlt: "Professional business meeting, modern office setting, diverse team collaboration - Walls.io on Unsplash",
      link: "/blog"
    },
    {
      id: 2,
      title: "Future of Digital Skills Training",
      description: "How technology hubs bridge the digital divide for marginalized youth in underserved communities.",
      category: "Technology",
      imageUrl: "https://images.unsplash.com/photo-1657972170499-3376d9eb8f65?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTAwNDR8MHwxfHNlYXJjaHwzfHx0ZWNobm9sb2d5JTIwaW5ub3ZhdGlvbiUyMGRpZ2l0YWwlMjB3b3Jrc3BhY2V8ZW58MHwwfHxibHVlfDE3NTY4MDcxODN8MA&ixlib=rb-4.1.0&q=85",
      imageAlt: "Technology innovation, digital transformation, modern workspace - Boitumelo on Unsplash",
      link: "/blog"
    },
    {
      id: 3,
      title: "From Idea to Implementation",
      description: "Success stories from SHIELD graduates who created thriving enterprises and social impact.",
      category: "Impact Stories",
      imageUrl: "https://images.unsplash.com/photo-1545886082-e66c6b9e011a?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTAwNDR8MHwxfHNlYXJjaHwyfHx5b3V0aCUyMGVudHJlcHJlbmV1cnNoaXAlMjBzdGFydHVwJTIweW91bmclMjBwZW9wbGV8ZW58MHwwfHx8MTc1NjgwNzE4M3ww&ixlib=rb-4.1.0&q=85",
      imageAlt: "Youth entrepreneurship, young people working, startup environment - Dieu Huyen Hoang on Unsplash",
      link: "/blog"
    },
    {
      id: 4,
      title: "5 Barriers to Innovation in Low-Income Communities",
      description: "Research reveals systemic challenges preventing innovation ecosystems in underserved areas.",
      category: "Research",
      imageUrl: "https://images.unsplash.com/photo-1548782033-3ac3a62ece8d?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTAwNDR8MHwxfHNlYXJjaHwxfHxjb21tdW5pdHklMjBkZXZlbG9wbWVudCUyMHNvY2lhbCUyMGltcGFjdCUyMGRpdmVyc2V8ZW58MHwwfHx8MTc1NjgwNzE4M3ww&ixlib=rb-4.1.0&q=85",
      imageAlt: "Community development, social impact, diverse community gathering - Kameron Kincade on Unsplash",
      link: "/blog"
    },
    {
      id: 5,
      title: "Building Sustainable Social Ventures",
      description: "How young entrepreneurs are creating lasting change through innovative business models.",
      category: "Entrepreneurship",
      imageUrl: "https://images.unsplash.com/photo-1603201667230-bd139210db18?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTAwNDR8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMG1lZXRpbmclMjBvZmZpY2UlMjB0ZWFtfGVufDB8MHx8fDE3NTY4MDcxODN8MA&ixlib=rb-4.1.0&q=85",
      imageAlt: "Professional business meeting, modern office setting, diverse team collaboration - Cherrydeck on Unsplash",
      link: "/blog"
    },
    {
      id: 6,
      title: "The Role of Mentorship in Youth Development",
      description: "Exploring how mentorship programs accelerate career growth and entrepreneurial success.",
      category: "Development",
      imageUrl: "https://images.unsplash.com/photo-1608785138453-6f2e7657bece?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTAwNDR8MHwxfHNlYXJjaHw1fHx0ZWNobm9sb2d5JTIwaW5ub3ZhdGlvbiUyMGRpZ2l0YWwlMjB3b3Jrc3BhY2V8ZW58MHwwfHxibHVlfDE3NTY4MDcxODN8MA&ixlib=rb-4.1.0&q=85",
      imageAlt: "Technology innovation, digital transformation, modern workspace - Jarrell Taylor on Unsplash",
      link: "/blog"
    }
  ];

  const maxScroll = Math.max(0, blogData.length - 4);

  const scroll = (direction: 'left' | 'right') => {
    const container = gridRef.current;
    if (!container) return;
    
    const cardWidth = 300; // card width + gap
    
    if (direction === 'left' && scrollIndex > 0) {
      setScrollIndex(scrollIndex - 1);
      container.scrollTo({
        left: (scrollIndex - 1) * cardWidth,
        behavior: 'smooth'
      });
    } else if (direction === 'right' && scrollIndex < maxScroll) {
      setScrollIndex(scrollIndex + 1);
      container.scrollTo({
        left: (scrollIndex + 1) * cardWidth,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="blog-section">
      <div className="container">
        <SectionHeader
          title="Latest News & Articles"
          onScrollLeft={() => scroll('left')}
          onScrollRight={() => scroll('right')}
          canScrollLeft={scrollIndex > 0}
          canScrollRight={scrollIndex < maxScroll}
        />
        <div className="blog-scroll-container">
          <div className="blog-grid" ref={gridRef}>
            {blogData.map((blog) => (
              <BlogCard
                key={blog.id}
                title={blog.title}
                description={blog.description}
                category={blog.category}
                imageUrl={blog.imageUrl}
                imageAlt={blog.imageAlt}
                link={blog.link}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;