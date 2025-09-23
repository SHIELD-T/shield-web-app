// run.js (Updated to fetch content types first, then blogs)
// Run with: node run.js
// Replace 'YOUR_SPACE_ID' and 'YOUR_ACCESS_TOKEN' with your real values.

const spaceId = 'YOUR_SPACE_ID'; // Replace with your Space ID
const accessToken = 'YOUR_ACCESS_TOKEN'; // Replace with your Delivery Token

const API_BASE = `https://cdn.contentful.com/spaces/${spaceId}/environments/master/entries`;
const TYPES_URL = `https://cdn.contentful.com/spaces/${spaceId}/environments/master/content_types?access_token=${accessToken}`;


fetch(TYPES_URL)
  .then(response => response.json())
  .then(data => {
    const items = data.items || [];
    console.log('Content types:');
    items.forEach(item => {
      console.log(`Name: ${item.name}, ID: ${item.sys.id}`);
    });
    const blogType = items.find(item => item.name.toLowerCase().includes('Blog'));
    if (blogType) {
      console.log('\nUse content_type=' + blogType.sys.id);
    }
  })
  .catch(err => console.error('Error:', err));

async function fetchContentTypes() {
  if (!accessToken) {
    console.error('Error: Access Token missing.');
    return null;
  }

  try {
    console.log('Fetching content types...');
    const response = await fetch(TYPES_URL);

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`HTTP ${response.status}: ${errorText}`);
    }

    const data = await response.json();
    const items = data.items || [];

    console.log(`\nFound ${items.length} content type(s):\n`);
    items.forEach((item) => {
      console.log(`Name: ${item.name}`);
      console.log(`ID (use in content_type): ${item.sys.id}`);
      console.log('---');
    });

    // Find "Blog" type
    const blogType = items.find((item) => item.name.toLowerCase().includes('blog'));
    if (blogType) {
      console.log(`\nBlog content type ID: ${blogType.sys.id}`);
      return blogType.sys.id;
    } else {
      console.log('\nNo "Blog" content type found—check names.');
      return null;
    }
  } catch (err) {
    console.error('Error fetching types:', err.message);
    return null;
  }
}

async function fetchBlogs(contentTypeId, limit = 4) {
  if (!spaceId || !accessToken || !contentTypeId) {
    console.error('Error: Space ID, Token, or Content Type ID missing.');
    return;
  }

  try {
    console.log('Fetching blogs...');
    const url = `${API_BASE}?access_token=${accessToken}&content_type=${contentTypeId}&order=-fields.date&limit=${limit}`;
    console.log('Request URL (redacted):', url.replace(accessToken, '[TOKEN]'));
    const response = await fetch(url);

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`HTTP ${response.status}: ${errorText}`);
    }

    const data = await response.json();
    const items = data.items || [];

    if (items.length === 0) {
      console.log('No blogs found. Check if entries are published.');
      return;
    }

    console.log(`\nSuccess! Found ${items.length} blog(s):\n`);
    items.forEach((item) => {
      const fields = item.fields;
      const images = Array.isArray(fields.image) ? fields.image : [];
      const firstImage = images[0];
      
      const bodyText = typeof fields.body === 'string' ? fields.body : '';
      const excerpt = bodyText.length > 0 ? bodyText.substring(0, 150) + '...' : 'No description available.';

      let imageUrl = '';
      if (firstImage && firstImage.fields && firstImage.fields.file && firstImage.fields.file.url) {
        imageUrl = `https://images.ctfassets.net/${spaceId}/${firstImage.sys.id}/${firstImage.fields.file.url}?w=400&h=300&fit=crop`;
      }

      console.log(`\n--- Blog: ${fields.title} ---`);
      console.log(`ID: ${item.sys.id}`);
      console.log(`Excerpt: ${excerpt}`);
      console.log(`Category: ${fields.category || 'ARTICLES'}`);
      console.log(`Author: ${fields.author}`);
      console.log(`Date: ${new Date(fields.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}`);
      console.log(`Read Time: ${fields.read}`);
      console.log(`Slug/Link: /blog/${fields.slug || ''}`);
      console.log(`Image URL: ${imageUrl || 'No image'}`);
      console.log(`Full Body Preview: ${bodyText.substring(0, 200)}...`);
      console.log('---');
    });
  } catch (err) {
    console.error('Error fetching blogs:', err.message);
    if (err.message.includes('400')) {
      console.log('Tip: Invalid content_type or field in order—use the ID from above.');
    }
  }
}

// First fetch types, then blogs
fetchContentTypes().then((contentTypeId) => {
  if (contentTypeId) {
    fetchBlogs(contentTypeId, 4);
  }
});