import React, { useState } from 'react';
import SocialLinks from './SocialLinks';
import './TeamCard.css';

interface TeamCardProps {
  name: string;
  position: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  socialLinks?: {
    linkedInUrl?: string;
  };
}

// Default fallback avatar for error handling
const DEFAULT_AVATAR = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="%23718096"%3E%3Cpath d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/%3E%3C/svg%3E';

const TeamCard: React.FC<TeamCardProps> = ({
  name,
  position,
  description,
  imageUrl,
  imageAlt,
  socialLinks
}) => {
  const [imageSrc, setImageSrc] = useState<string>(imageUrl || DEFAULT_AVATAR);
  const [imageLoading, setImageLoading] = useState<boolean>(Boolean(imageUrl));

  const handleImageLoad = () => {
    setImageLoading(false);
  };

  const handleImageError = () => {
    setImageSrc(DEFAULT_AVATAR);
    setImageLoading(false);
  };

  const sanitizedAltText = imageAlt || `${name} - ${position}`;

  return (
    <article className="team-card" role="article" aria-label={`Team member: ${name}`}>
      <div className="team-card-image">
        {imageLoading && (
          <div className="team-card-image-skeleton" aria-hidden="true">
            Loading...
          </div>
        )}
        <img
          src={imageSrc}
          alt={sanitizedAltText}
          width="280"
          height="320"
          onError={handleImageError}
          onLoad={handleImageLoad}
          style={{ display: imageLoading ? 'none' : 'block' }}
        />
      </div>
      <div className="team-card-content">
        <h3 className="team-card-name">{name}</h3>
        <p className="team-card-position">{position}</p>
        <p className="team-card-description">{description}</p>
        {socialLinks?.linkedInUrl && (
          <SocialLinks
            linkedInUrl={socialLinks.linkedInUrl}
          />
        )}
      </div>
    </article>
  );
};

export default TeamCard;