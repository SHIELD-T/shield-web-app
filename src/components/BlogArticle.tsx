import React from 'react';
import { Link } from 'react-router-dom';
import './BlogArticle.css';

interface BlogArticleProps {
  title: string;
  description: string;
  category: string;
  imageUrl: string;
  imageAlt: string;
  link: string;
  date: string;
}

const BlogArticle: React.FC<BlogArticleProps> = ({
  title,
  description,
  category,
  imageUrl,
  imageAlt,
  link,
  date
}) => {
  return (
    <article className="blog-article">
      <div className="blog-article-image">
        <img 
          src={imageUrl} 
          alt={imageAlt}
          width="120"
          height="80"
        />
      </div>
      <div className="blog-article-content">
        <div className="blog-article-meta">
          <span className="blog-article-category">{category}</span>
          <span className="blog-article-date">{date}</span>
        </div>
        <h3 className="blog-article-title">
          <Link to={link}>{title}</Link>
        </h3>
        <p className="blog-article-description">{description}</p>
      </div>
    </article>
  );
};

export default BlogArticle;