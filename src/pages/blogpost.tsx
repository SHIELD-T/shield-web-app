// src/pages/BlogPost.tsx (Added &include=1 to resolve asset fields)
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';

const spaceId = 'gthdsgcv2h5h';
const accessToken = 'VHUN5zQjJzdS08fNWIXBSzf4GpkS_gvyZVXWbavMcIg';

const API_BASE = `https://cdn.contentful.com/spaces/${spaceId}/environments/master/entries`;

interface BlogPostPageProps {}

const BlogPostPage: React.FC<BlogPostPageProps> = () => {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!slug) return;

    const fetchPost = async () => {
      if (!spaceId || !accessToken) {
        setError('Contentful configuration missing');
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        const url = `${API_BASE}?access_token=${accessToken}&content_type=Blog&fields.slug=${slug}&limit=1&include=1`;
        const response = await fetch(url);

        if (!response.ok) {
          const errorText = await response.text();
          throw new Error(`HTTP ${response.status}: ${errorText}`);
        }

        const data = await response.json();
        const items = data.items || [];

        if (items.length === 0) {
          setError('Blog post not found');
        } else {
          setPost(items[0]);
        }
      } catch (err) {
        setError('Failed to load blog post');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [slug]);

  if (loading) {
    return <div className="loading">Loading post...</div>;
  }

  if (error || !post) {
    return <div className="error">{error || 'Post not found'}</div>;
  }

  const fields = post.fields;
  const images = Array.isArray(fields.image) ? fields.image : [];
  const firstImage = images[0];

  let imageUrl = '';
  if (firstImage && firstImage.fields && firstImage.fields.file && firstImage.fields.file.url) {
    imageUrl = `https://images.ctfassets.net/${spaceId}/${firstImage.sys.id}/${firstImage.fields.file.url}?w=800&h=400&fit=crop`;
  }

  return (
    <article className="blog-post">
      <div className="container">
        {imageUrl && (
          <img
            src={imageUrl}
            alt={fields.title}
            className="blog-post-hero"
          />
        )}
        <header className="blog-post-header">
          <span className="blog-post-category">{fields.category}</span>
          <h1>{fields.title}</h1>
          <div className="blog-post-meta">
            <span>By {fields.author}</span>
            <span>{new Date(fields.date).toLocaleDateString('en-US', { 
              year: 'numeric', month: 'long', day: 'numeric' 
            })}</span>
            <span>{fields.read}</span>
          </div>
        </header>
        <div className="blog-post-body">
          <ReactMarkdown>{fields.body}</ReactMarkdown>
        </div>
      </div>
    </article>
  );
};

export default BlogPostPage;