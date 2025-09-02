import React from 'react';
import { Link } from 'react-router-dom';
import './BlogCard.css';

interface BlogCardProps {
  title: string;
  description: string;
  category: string;
  imageUrl: string;
  imageAlt: string;
  link: string;
}

const BlogCard: React.FC<BlogCardProps> = ({
  title,
  description,
  category,
  imageUrl,
  imageAlt,
  link
}) => {
  return (
    <div className="blog-card">
      <div className="blog-image">
        <img 
          src={imageUrl} 
          alt={imageAlt}
          width="100%"
          height="200"
          style={{ objectFit: 'cover', width: '100%', height: '200px' }}
        />
        <div className="blog-category">{category}</div>
      </div>
      <div className="blog-content">
        <h3>{title}</h3>
        <p>{description}</p>
        <Link to={link} className="blog-link">Read More →</Link>
      </div>
    </div>
  );
};

export default BlogCard;