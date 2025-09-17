import React, { useMemo } from 'react';
import TeamCard from './TeamCard';
import { TEAM_MEMBERS, IMAGE_CONFIG, validateImageUrl } from '../data/teamData';
import './TeamSection.css';

const TeamSection: React.FC = () => {
  // Memoize processed team data to prevent unnecessary recalculations
  const teamData = useMemo(() => {
    return TEAM_MEMBERS.map(member => {
      const isValid = validateImageUrl(member.imageUrl);
      
      return {
        ...member,
        // Validate and ensure fallback for missing/invalid images
        imageUrl: isValid ? member.imageUrl : IMAGE_CONFIG.fallbackAvatar,
        // Ensure meaningful alt text for accessibility
        imageAlt: member.imageAlt || `${member.name} - ${member.position} at SHIELD`
      };
    });
  }, []);

  return (
    <section className="team-section">
      <div className="container">
        <div className="team-section-header">
          <h2>Our Team</h2>
          <p className="team-section-subtitle">
            Meet the dedicated professionals driving innovation and change in underserved communities
          </p>
        </div>
        <div className="team-grid">
          {teamData.map((member) => (
            <TeamCard
              key={member.id}
              name={member.name}
              position={member.position}
              description={member.description}
              imageUrl={member.imageUrl}
              imageAlt={member.imageAlt}
              socialLinks={member.socialLinks}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;