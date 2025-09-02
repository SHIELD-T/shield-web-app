import React from 'react';
import XIcon from './icons/XIcon';
import LinkedInIcon from './icons/LinkedInIcon';
import FacebookIcon from './icons/FacebookIcon';
import './SocialLinks.css';

interface SocialLinksProps {
  xUrl?: string;
  linkedInUrl?: string;
  facebookUrl?: string;
}

const SocialLinks: React.FC<SocialLinksProps> = ({
  xUrl,
  linkedInUrl,
  facebookUrl
}) => {
  return (
    <div className="social-links">
      <div className="social-link">
        <XIcon width={20} height={20} color="#64748b" />
      </div>
      <div className="social-link">
        <LinkedInIcon width={20} height={20} color="#64748b" />
      </div>
      <div className="social-link">
        <FacebookIcon width={20} height={20} color="#64748b" />
      </div>
    </div>
  );
};

export default SocialLinks;