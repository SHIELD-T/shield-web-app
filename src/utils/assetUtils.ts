/**
 * Asset path utilities for resolving correct paths in both development and production
 * Handles GitHub Pages deployment with the configured base path
 */

/**
 * Resolves an asset path to work correctly in both development and production (GitHub Pages)
 * 
 * @param path - The relative path to the asset (without 'public' prefix)
 * @returns The correctly resolved path that works in both environments
 * 
 * @example
 * // Returns "/shield-web-app/assets/Founders/eric.jpg" in production
 * // Returns "/assets/Founders/eric.jpg" in development
 * getAssetPath("assets/Founders/eric.jpg")
 */
export const getAssetPath = (path: string): string => {
  // Remove 'public/' prefix if it exists
  const cleanPath = path.replace(/^public[\/\\]/, '');
  
  // Use import.meta.env.BASE_URL which contains the base path from vite.config.ts
  return `${import.meta.env.BASE_URL}${cleanPath}`;
};

/**
 * Checks if a URL is external (absolute) or internal (relative)
 * 
 * @param url - The URL to check
 * @returns True if the URL is external, false otherwise
 */
export const isExternalUrl = (url: string): boolean => {
  return url.startsWith('http://') || 
         url.startsWith('https://') || 
         url.startsWith('data:') || 
         url.startsWith('//');
};

/**
 * Resolves any URL, handling both external and internal paths
 * For external URLs, returns the URL as-is
 * For internal paths, applies the base path
 * 
 * @param url - The URL or path to resolve
 * @returns The correctly resolved URL
 */
export const resolveUrl = (url: string): string => {
  if (isExternalUrl(url)) {
    return url;
  }
  return getAssetPath(url);
};