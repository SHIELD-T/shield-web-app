// src/services/useBlogs.ts (Fixed: Corrected image URL generation)
import { useState, useEffect } from 'react';

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  imageUrl: string;
  imageAlt: string;
  link: string;
  date: string;
  author?: string;
  readTime?: string;
}

const spaceId = 'gthdsgcv2h5h';
const accessToken = 'VHUN5zQjJzdS08fNWIXBSzf4GpkS_gvyZVXWbavMcIg';

if (!spaceId || !accessToken) {
  console.warn('Contentful env vars missing—check .env file');
}

const API_BASE = `https://cdn.contentful.com/spaces/${spaceId}/environments/master/entries`;
const ASSET_BASE = `https://cdn.contentful.com/spaces/${spaceId}/environments/master/assets`;

async function fetchAsset(assetId: string): Promise<string | null> {
  if (!assetId) return null;
  try {
    const url = `${ASSET_BASE}/${assetId}?access_token=${accessToken}`;
    const response = await fetch(url);
    if (!response.ok) return null;
    const data = await response.json();
    if (data.fields && data.fields.file && data.fields.file.url) {
      // Fix: Remove the duplicate assetId from the URL construction
      // The file.url already contains the correct path
      let fileUrl = data.fields.file.url;
      
      // Ensure the URL starts with https:// if it doesn't already
      if (fileUrl.startsWith('//')) {
        fileUrl = `https:${fileUrl}`;
      } else if (!fileUrl.startsWith('https://')) {
        fileUrl = `https://${fileUrl}`;
      }
      
      // Add image transformation parameters
      return `${fileUrl}?w=400&h=300&fit=crop`;
    }
    return null;
  } catch (err) {
    console.error('Error fetching asset', assetId, ':', err);
    return null;
  }
}

export const useBlogs = (limit: number = 4) => {
  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      if (!spaceId || !accessToken) {
        setError('Contentful configuration missing');
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        const url = `${API_BASE}?access_token=${accessToken}&content_type=blog_shield&limit=${limit}&include=1`;
        const response = await fetch(url);

        if (!response.ok) {
          const errorText = await response.text();
          throw new Error(`HTTP ${response.status}: ${errorText}`);
        }

        const data = await response.json();
        const items = data.items || [];

        const processedBlogs = await Promise.all(items.map(async (item: any) => {
          const fields = item.fields;
          
          const bodyText = typeof fields.body === 'string' ? fields.body : '';
          const excerpt = bodyText.length > 0 ? bodyText.substring(0, 150) + '...' : 'No description available.';

          let imageUrl = '';
          if (fields.image && Array.isArray(fields.image) && fields.image.length > 0) {
            const firstImageLink = fields.image[0];
            console.log('Image link for', fields.title, ':', firstImageLink); // Debug link
            if (firstImageLink.sys && firstImageLink.sys.id) {
              imageUrl = await fetchAsset(firstImageLink.sys.id) || '';
            }
          }
          console.log('Generated imageUrl for', fields.title, ':', imageUrl); // Debug final URL

          return {
            id: item.sys.id,
            title: fields.title || '',
            excerpt,
            category: fields.category || 'ARTICLES',
            imageUrl,
            imageAlt: fields.title || 'Blog image',
            link: `/blog/${fields.slug || ''}`,
            date: fields.date ? new Date(fields.date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            }) : '',
            author: fields.author,
            readTime: fields.read,
          };
        }));

        setBlogs(processedBlogs);
      } catch (err) {
        setError('Failed to fetch blogs');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, [limit]);

  return { blogs, loading, error };
};