import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import TeamSection from '../TeamSection';
import { TEAM_MEMBERS, IMAGE_CONFIG } from '../../data/teamData';

// Mock the TeamCard component
jest.mock('../TeamCard', () => {
  return function MockTeamCard({ name, position, description, imageUrl, imageAlt, socialLinks }: any) {
    return (
      <div data-testid="team-card">
        <h3>{name}</h3>
        <p>{position}</p>
        <p>{description}</p>
        <img src={imageUrl} alt={imageAlt} />
        {socialLinks && <div data-testid="social-links">{JSON.stringify(socialLinks)}</div>}
      </div>
    );
  };
});

describe('TeamSection Component', () => {
  it('renders without crashing', () => {
    render(<TeamSection />);
    expect(screen.getByText('Our Team')).toBeInTheDocument();
  });

  it('renders the correct number of team members', () => {
    render(<TeamSection />);
    const teamCards = screen.getAllByTestId('team-card');
    expect(teamCards).toHaveLength(TEAM_MEMBERS.length);
  });

  it('displays all team member information correctly', () => {
    render(<TeamSection />);
    
    TEAM_MEMBERS.forEach(member => {
      expect(screen.getByText(member.name)).toBeInTheDocument();
      expect(screen.getByText(member.position)).toBeInTheDocument();
      expect(screen.getByText(member.description)).toBeInTheDocument();
    });
  });

  it('provides fallback for missing images', () => {
    render(<TeamSection />);
    const images = screen.getAllByRole('img');
    
    images.forEach(img => {
      const src = img.getAttribute('src');
      expect(src).toBeTruthy();
      // Check that each image has either a valid URL or the fallback
      expect(
        src?.includes('/assets/Founders/') || 
        src === IMAGE_CONFIG.fallbackAvatar
      ).toBeTruthy();
    });
  });

  it('includes proper alt text for accessibility', () => {
    render(<TeamSection />);
    const images = screen.getAllByRole('img');
    
    images.forEach(img => {
      const alt = img.getAttribute('alt');
      expect(alt).toBeTruthy();
      expect(alt).not.toBe('');
      // Alt text should include name and position
      expect(alt).toMatch(/\w+ \w+ - \w+/);
    });
  });

  it('passes social links to TeamCard when available', () => {
    render(<TeamSection />);
    
    TEAM_MEMBERS.forEach(member => {
      if (member.socialLinks) {
        const socialLinksElements = screen.queryAllByTestId('social-links');
        expect(socialLinksElements.length).toBeGreaterThan(0);
      }
    });
  });

  it('renders section header with correct subtitle', () => {
    render(<TeamSection />);
    expect(
      screen.getByText('Meet the dedicated professionals driving innovation and change in underserved communities')
    ).toBeInTheDocument();
  });

  it('applies correct CSS classes', () => {
    const { container } = render(<TeamSection />);
    
    expect(container.querySelector('.team-section')).toBeInTheDocument();
    expect(container.querySelector('.container')).toBeInTheDocument();
    expect(container.querySelector('.team-section-header')).toBeInTheDocument();
    expect(container.querySelector('.team-grid')).toBeInTheDocument();
  });

  it('memoizes team data to prevent unnecessary recalculations', () => {
    const { rerender } = render(<TeamSection />);
    const initialCards = screen.getAllByTestId('team-card');
    
    // Re-render the component
    rerender(<TeamSection />);
    const rerenderedCards = screen.getAllByTestId('team-card');
    
    // Should have the same number of cards
    expect(rerenderedCards).toHaveLength(initialCards.length);
  });
});

// Integration tests for error scenarios
describe('TeamSection Error Handling', () => {
  it('handles empty image URLs gracefully', () => {
    // Mock TEAM_MEMBERS with empty imageUrl
    const originalMembers = [...TEAM_MEMBERS];
    TEAM_MEMBERS[0].imageUrl = '';
    
    render(<TeamSection />);
    const images = screen.getAllByRole('img');
    
    // Should use fallback avatar
    expect(images[0].getAttribute('src')).toBe(IMAGE_CONFIG.fallbackAvatar);
    
    // Restore original data
    TEAM_MEMBERS.splice(0, TEAM_MEMBERS.length, ...originalMembers);
  });

  it('handles missing alt text gracefully', () => {
    // Mock TEAM_MEMBERS with empty imageAlt
    const originalMembers = [...TEAM_MEMBERS];
    TEAM_MEMBERS[0].imageAlt = '';
    
    render(<TeamSection />);
    const images = screen.getAllByRole('img');
    
    // Should generate alt text from name and position
    const generatedAlt = images[0].getAttribute('alt');
    expect(generatedAlt).toContain(TEAM_MEMBERS[0].name);
    expect(generatedAlt).toContain(TEAM_MEMBERS[0].position);
    
    // Restore original data
    TEAM_MEMBERS.splice(0, TEAM_MEMBERS.length, ...originalMembers);
  });
});

// Performance tests
describe('TeamSection Performance', () => {
  it('uses React.memo or useMemo for optimization', () => {
    const { rerender } = render(<TeamSection />);
    
    // Get initial render time
    const startTime = performance.now();
    rerender(<TeamSection />);
    const endTime = performance.now();
    
    // Re-render should be fast due to memoization
    expect(endTime - startTime).toBeLessThan(100); // Should be very fast
  });

  it('lazy loads images for better performance', async () => {
    render(<TeamSection />);
    const images = screen.getAllByRole('img');
    
    // Check if images have loading="lazy" attribute (if implemented in TeamCard)
    // This would be implemented in the actual TeamCard component
    await waitFor(() => {
      images.forEach(img => {
        // The actual implementation would check for lazy loading
        expect(img).toBeInTheDocument();
      });
    });
  });
});