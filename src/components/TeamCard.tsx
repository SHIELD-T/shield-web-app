import React from 'react';
import SocialLinks from './SocialLinks';
import './TeamCard.css';

interface TeamCardProps {
  name: string;
  position: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
}

const TeamCard: React.FC<TeamCardProps> = ({
  name,
  position,
  description,
  imageUrl,
  imageAlt
}) => {
  return (
    <div className="team-card">
      <div className="team-card-image">
        <img 
          src={imageUrl} 
          alt={imageAlt}
          width="280"
          height="320"
        />
      </div>
      <div className="team-card-content">
        <h3 className="team-card-name">{name}</h3>
        <p className="team-card-position">{position}</p>
        <p className="team-card-description">{description}</p>
        <SocialLinks />
      </div>
    </div>
  );
};

export default TeamCard;