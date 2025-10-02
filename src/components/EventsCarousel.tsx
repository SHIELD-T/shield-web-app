// src/components/EventsCarousel.tsx
import React, { type Dispatch, type SetStateAction } from 'react';
import { Link } from 'react-router-dom';
import { useEvents } from '../services/useEvents'; // Corrected import path

// Define prop types for EventsCarousel
interface EventsCarouselProps {
  eventScrollIndex: number;
  setEventScrollIndex: Dispatch<SetStateAction<number>>;
}

const EventsCarousel: React.FC<EventsCarouselProps> = ({ eventScrollIndex, setEventScrollIndex }) => {
  // Fetch featured events only (limit to 4 for carousel)
  const { events, loading, error } = useEvents(4);

  if (loading) {
    return (
      <div className="events-carousel-container">
        <div className="events-carousel-loading">
          Loading events...
        </div>
      </div>
    );
  }

  if (error || events.length === 0) {
    return (
      <div className="events-carousel-container">
        <div className="events-carousel-error">
          {error || 'No events available'}
        </div>
      </div>
    );
  }

  return (
    <div className="events-carousel-container">
      <div className="events-carousel">
        {events.map((event, index) => {
          const getCardClass = () => {
            const totalCards = events.length;
            
            // Center card (active/focused)
            if (index === eventScrollIndex) return 'center';
            
            // Left card
            const leftIndex = eventScrollIndex === 0 ? totalCards - 1 : eventScrollIndex - 1;
            if (index === leftIndex) return 'left';
            
            // Right card
            const rightIndex = eventScrollIndex === totalCards - 1 ? 0 : eventScrollIndex + 1;
            if (index === rightIndex) return 'right';
            
            // Hidden cards
            return 'hidden';
          };
          
          const cardClass = getCardClass();
          
          return (
            <div 
              key={event.id}
              className={`event-card-carousel ${cardClass}`}
              onClick={() => {
                if (cardClass === 'left' || cardClass === 'right') {
                  setEventScrollIndex(index);
                }
              }}
              style={{ cursor: cardClass === 'left' || cardClass === 'right' ? 'pointer' : 'default' }}
            >
              <div className="event-image">
                <img 
                  src={event.image.url || '/placeholder-event.jpg'}
                  alt={event.image.title || event.title}
                  width="100%"
                  height="220"
                />
                <div className="event-date">
                  <span className="day">{event.day}</span>
                  <span className="month">{event.month}</span>
                </div>
              </div>
              <div className="event-content">
                <h3>{event.title}</h3>
                <p className="event-meta">{event.meta}</p>
                <p>{event.description}</p>
                {/* Use external link if it starts with http, otherwise internal Link */}
                {event.actionLink.startsWith('http') ? (
                  <a 
                    href={event.actionLink} 
                    className="event-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {event.actionText}
                  </a>
                ) : (
                  <Link to={event.actionLink} className="event-link">
                    {event.actionText}
                  </Link>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default EventsCarousel;