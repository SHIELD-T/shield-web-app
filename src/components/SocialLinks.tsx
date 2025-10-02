import React from 'react';
import LinkedInIcon from './icons/LinkedInIcon';

import './SocialLinks.css';

interface SocialLinksProps {
  linkedInUrl?: string;
}

const SocialLinks: React.FC<SocialLinksProps> = ({
  linkedInUrl
}) => {
  if (!linkedInUrl) {
    return null;
  }

  return (
    <div className="social-links">
      <a
        href={linkedInUrl}
        className="social-link"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn Profile"
      >
        <LinkedInIcon width={20} height={20} color="#64748b" />
      </a>
    </div>
  );
};

export default SocialLinks;