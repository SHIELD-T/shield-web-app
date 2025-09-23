import React from 'react';
import BlogArticle from './BlogArticle';
import { useBlogs, type BlogPost } from '../services/useBlogs'; 
import './BlogSection.css';

const BlogSection: React.FC = () => {
  const { blogs, loading, error } = useBlogs(4); // Fetch 4 latest

  if (loading) {
    return (
      <section className="blog-section">
        <div className="container">
          <div className="blog-section-header">
            <h2>Latest News and Articles</h2>
          </div>
          <p>Loading blogs...</p> {/* Add a spinner component here */}
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="blog-section">
        <div className="container">
          <div className="blog-section-header">
            <h2>Latest News and Articles</h2>
          </div>
          <p>Error loading blogs: {error}</p>
        </div>
      </section>
    );
  }

  return (
    <section className="blog-section">
      <div className="container">
        <div className="blog-section-header">
          <h2>Latest News and Articles</h2>
        </div>
        <div className="blog-grid">
          <div className="blog-column">
            {blogs.slice(0, 2).map((blog: BlogPost) => (
              <BlogArticle
                key={blog.id}
                title={blog.title}
                description={blog.excerpt}
                category={blog.category}
                imageUrl={blog.imageUrl}
                imageAlt={blog.imageAlt}
                link={blog.link}
                date={blog.date}
              />
            ))}
          </div>
          <div className="blog-column">
            {blogs.slice(2, 4).map((blog: BlogPost) => (
              <BlogArticle
                key={blog.id}
                title={blog.title}
                description={blog.excerpt}
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