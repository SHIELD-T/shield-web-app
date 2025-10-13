// Team member data configuration
// This file centralizes all team member information for better maintainability

export interface TeamMember {
  id: number;
  name: string;
  position: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  socialLinks?: {
    xUrl?: string;
    linkedInUrl?: string;
    facebookUrl?: string;
  };
}

// Configuration for image paths and defaults
export const IMAGE_CONFIG = {
  basePath: '/assets/Founders/',
  fallbackAvatar: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="%23718096"%3E%3Cpath d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/%3E%3C/svg%3E',
  imageFormats: ['jpg', 'jpeg', 'png', 'webp']
};

// Team members data
export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: 1,
    name: "James Mugambi",
    position: "CEO & Co-Founder",
    description: "Leading SHIELD's mission to empower underserved youth through innovation and entrepreneurship programs.",
    imageUrl: `${IMAGE_CONFIG.basePath}james.jpg`,
    imageAlt: "James Mugambi - CEO & Co-Founder of SHIELD, professional headshot",
    socialLinks: {
      linkedInUrl: "https://www.linkedin.com/in/jamesmugambi/", 
    }
  },
  {
    id: 2,
    name: "David Kiai",
    position: "CIO & Co-Founder",
    description: "Developing and implementing design thinking workshops and entrepreneurship training programs.",
    imageUrl: `${IMAGE_CONFIG.basePath}kama.jpg`, 
    imageAlt: "David Kiai - CIO & Co-Founder of SHIELD, professional headshot",
    socialLinks: {
      linkedInUrl: "https://www.linkedin.com/in/david-kiai-4a76201a5",
    }
  },
  {
    id: 3,
    name: "Eric Muriithi",
    position: "CTO & Co-Founder",
    description: "Overseeing digital skills training and technology infrastructure for community innovation hubs.",
    imageUrl: `${IMAGE_CONFIG.basePath}eric.jpg`,
    imageAlt: "Eric Muriithi - CTO & Co-Founder of SHIELD, professional headshot",
    socialLinks: {
      linkedInUrl: "https://www.linkedin.com/in/eric-muriithi-48346117b/", 
    }
  }
];

// Helper function to get team member by ID
export const getTeamMemberById = (id: number): TeamMember | undefined => {
  return TEAM_MEMBERS.find(member => member.id === id);
};

// Helper function to get team members by position
export const getTeamMembersByPosition = (position: string): TeamMember[] => {
  return TEAM_MEMBERS.filter(member => 
    member.position.toLowerCase().includes(position.toLowerCase())
  );
};

// Helper function to validate image URL
export const validateImageUrl = (url: string): boolean => {
  if (!url) return false;
  
  // Check if it's a data URL (base64 image)
  if (url.startsWith('data:image')) return true;
  
  // Check if it's a valid HTTP(S) URL
  if (url.startsWith('http://') || url.startsWith('https://')) return true;
  
  // Check if it's a valid path (relative or absolute) with supported format
  const supportedFormats = IMAGE_CONFIG.imageFormats;
  const fileExtension = url.split('.').pop()?.toLowerCase();
  
  // Return true if the file extension is supported (covers both relative and absolute paths)
  return fileExtension ? supportedFormats.includes(fileExtension) : false;
};

// Helper function to get fallback image
export const getFallbackImage = (_name: string, _position: string): string => {
  // You could generate different fallback images based on initials or position
  return IMAGE_CONFIG.fallbackAvatar;
};