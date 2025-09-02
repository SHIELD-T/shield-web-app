import React from 'react';
import TeamCard from './TeamCard';
import './TeamSection.css';

const TeamSection: React.FC = () => {
  const teamData = [
    {
      id: 1,
      name: "Sarah Johnson",
      position: "Executive Director",
      description: "Leading SHIELD's mission to empower underserved youth through innovation and entrepreneurship programs.",
      imageUrl: "https://images.unsplash.com/photo-1689600944138-da3b150d9cb8?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTAwNDR8MHwxfHNlYXJjaHwzfHxwcm9mZXNzaW9uYWwlMjBoZWFkc2hvdCUyMGJ1c2luZXNzJTIwcG9ydHJhaXR8ZW58MHwxfHx8MTc1NjgxMTA5OXww&ixlib=rb-4.1.0&q=85",
      imageAlt: "Professional headshot, business portrait, diverse team member - Philip White on Unsplash"
    },
    {
      id: 2,
      name: "Marcus Thompson",
      position: "Program Manager",
      description: "Developing and implementing design thinking workshops and entrepreneurship training programs.",
      imageUrl: "https://images.unsplash.com/photo-1738750908048-14200459c3c9?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTAwNDR8MHwxfHNlYXJjaHw4fHxwcm9mZXNzaW9uYWwlMjBoZWFkc2hvdCUyMGJ1c2luZXNzJTIwcG9ydHJhaXR8ZW58MHwxfHx8MTc1NjgxMTA5OXww&ixlib=rb-4.1.0&q=85",
      imageAlt: "Professional headshot, business portrait, diverse team member - Mudia Mowoe on Unsplash"
    },
    {
      id: 3,
      name: "David Chen",
      position: "Technology Director",
      description: "Overseeing digital skills training and technology infrastructure for community innovation hubs.",
      imageUrl: "https://images.unsplash.com/photo-1680540692052-79fde1108370?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTAwNDR8MHwxfHNlYXJjaHw0fHxwcm9mZXNzaW9uYWwlMjBoZWFkc2hvdCUyMGJ1c2luZXNzJTIwcG9ydHJhaXR8ZW58MHwxfHx8MTc1NjgxMTA5OXww&ixlib=rb-4.1.0&q=85",
      imageAlt: "Professional headshot, business portrait, diverse team member - Mike Cox on Unsplash"
    }
  ];

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
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;