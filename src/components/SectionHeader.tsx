import React from 'react';
import './SectionHeader.css';

interface SectionHeaderProps {
  title: string;
  onScrollLeft: () => void;
  onScrollRight: () => void;
  canScrollLeft: boolean;
  canScrollRight: boolean;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  onScrollLeft,
  onScrollRight,
  canScrollLeft,
  canScrollRight
}) => {
  return (
    <div className="section-header">
      <h2>{title}</h2>
      <div className="nav-arrows">
        <button 
          className={`nav-arrow ${!canScrollLeft ? 'disabled' : ''}`}
          onClick={onScrollLeft}
          disabled={!canScrollLeft}
        >
          ←
        </button>
        <button 
          className={`nav-arrow ${!canScrollRight ? 'disabled' : ''}`}
          onClick={onScrollRight}
          disabled={!canScrollRight}
        >
          →
        </button>
      </div>
    </div>
  );
};

export default SectionHeader;