// src/pages/BlogPost.tsx - Modern Clean Layout
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import './BlogPost.css'; // Make sure this path matches your CSS file location

const spaceId = 'gthdsgcv2h5h';
const accessToken = 'VHUN5zQjJzdS08fNWIXBSzf4GpkS_gvyZVXWbavMcIg';

const API_BASE = `https://cdn.contentful.com/spaces/${spaceId}/environments/master/entries`;
const ASSET_BASE = `https://cdn.contentful.com/spaces/${spaceId}/environments/master/assets`;

// Add the fetchAsset function from useBlogs.tsx
async function fetchAsset(assetId: string): Promise<string | null> {
  if (!assetId) return null;
  try {
    const url = `${ASSET_BASE}/${assetId}?access_token=${accessToken}`;
    console.log('Fetching asset with URL:', url);
    const response = await fetch(url);
    if (!response.ok) {
      console.error('Asset fetch failed:', response.status);
      return null;
    }
    const data = await response.json();
    console.log('Asset data:', data);
    if (data.fields && data.fields.file && data.fields.file.url) {
      let fileUrl = data.fields.file.url;
      
      // Ensure the URL starts with https:// if it doesn't already
      if (fileUrl.startsWith('//')) {
        fileUrl = `https:${fileUrl}`;
      } else if (!fileUrl.startsWith('https://')) {
        fileUrl = `https://${fileUrl}`;
      }
      
      // Add image transformation parameters
      const finalUrl = `${fileUrl}?w=800&h=300&fit=crop`;
      console.log('Generated asset URL:', finalUrl);
      return finalUrl;
    }
    return null;
  } catch (err) {
    console.error('Error fetching asset', assetId, ':', err);
    return null;
  }
}

interface BlogPostPageProps {}

const BlogPostPage: React.FC<BlogPostPageProps> = () => {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<any>(null);
  const [imageUrl, setImageUrl] = useState<string>('');
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
        const url = `${API_BASE}?access_token=${accessToken}&content_type=blog_shield&fields.slug=${slug}&limit=1&include=1`;
        console.log('Fetching blog post with URL:', url);
        
        const response = await fetch(url);
        console.log('Response status:', response.status);
        console.log('Response headers:', response.headers);

        if (!response.ok) {
          const errorText = await response.text();
          console.error('API Error Response:', errorText);
          throw new Error(`HTTP ${response.status}: ${errorText}`);
        }

        const data = await response.json();
        console.log('Full API Response:', data);
        console.log('Items array:', data.items);
        console.log('Includes:', data.includes);
        
        const items = data.items || [];

        if (items.length === 0) {
          console.error('No blog post found for slug:', slug);
          setError('Blog post not found');
        } else {
          console.log('Found blog post:', items[0]);
          const blogPost = items[0];
          setPost(blogPost);
          
          // Fetch image separately
          const fields = blogPost.fields;
          if (fields.image && Array.isArray(fields.image) && fields.image.length > 0) {
            const firstImageRef = fields.image[0];
            console.log('Image reference:', firstImageRef);
            
            if (firstImageRef.sys && firstImageRef.sys.id) {
              console.log('Fetching asset for ID:', firstImageRef.sys.id);
              try {
                const fetchedImageUrl = await fetchAsset(firstImageRef.sys.id);
                if (fetchedImageUrl) {
                  console.log('Successfully fetched image URL:', fetchedImageUrl);
                  setImageUrl(fetchedImageUrl);
                } else {
                  console.error('Failed to fetch image URL');
                }
              } catch (imageError) {
                console.error('Error fetching image:', imageError);
              }
            }
          }
        }
      } catch (err) {
        console.error('Error fetching blog post:', err);
        console.error('Error details:', {
          message: err instanceof Error ? err.message : 'Unknown error',
          stack: err instanceof Error ? err.stack : undefined
        });
        setError('Failed to load blog post');
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [slug]);

  if (loading) {
    return (
      <div className="blog-post">
        <div className="container-b">
          <div className="loading">Loading post...</div>
        </div>
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="blog-post">
        <div className="container-b">
          <div className="error">{error || 'Post not found'}</div>
        </div>
      </div>
    );
  }

  const fields = post.fields;

  return (
    <article className="blog-post">
      <div className="container-b">
       
        
        {/* Body Content */}
        <div className="blog-post-body">
          {/* Hero Image inside body */}
          {imageUrl && (
            <img
              src={imageUrl}
              alt={fields.title}
              className="blog-post-hero"
            />
          )}

           {/* Header Section */}
        <header className="blog-post-header">
          <h1>{fields.title}</h1>
        </header>
          
          <ReactMarkdown
            components={{
              h1: ({children}) => <h1 className="blog-h1">{children}</h1>,
              h2: ({children}) => <h2 className="blog-h2">{children}</h2>,
              h3: ({children}) => <h3 className="blog-h3">{children}</h3>,
              h4: ({children}) => <h4 className="blog-h4">{children}</h4>,
              h5: ({children}) => <h5 className="blog-h5">{children}</h5>,
              h6: ({children}) => <h6 className="blog-h6">{children}</h6>,
              p: ({children}) => <p className="blog-paragraph">{children}</p>,
              ul: ({children}) => <ul className="blog-ul">{children}</ul>,
              ol: ({children}) => <ol className="blog-ol">{children}</ol>,
              li: ({children}) => <li className="blog-li">{children}</li>,
              blockquote: ({children}) => <blockquote className="blog-blockquote">{children}</blockquote>,
              code: ({children}) => <code className="blog-code">{children}</code>,
              pre: ({children}) => <pre className="blog-pre">{children}</pre>,
              strong: ({children}) => <strong className="blog-strong">{children}</strong>,
              em: ({children}) => <em className="blog-em">{children}</em>,
              a: ({href, children}) => (
                <a 
                  href={href} 
                  className="blog-link" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  {children}
                </a>
              )
            }}
          >
            {fields.body}
          </ReactMarkdown>
        </div>
        
        {/* Footer Meta */}
        <footer className="blog-post-meta">
          {fields.author && <span>By {fields.author}</span>}
          {fields.date && (
            <span>
              {new Date(fields.date).toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </span>
          )}
          {fields.read && <span>{fields.read}</span>}
        </footer>
      </div>
    </article>
  );
};

export default BlogPostPage;