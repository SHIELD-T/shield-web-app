import React from 'react';
import ProcessStep from './ProcessStep';
import './ProcessList.css';

interface ProcessItem {
  title: string;
  description: string;
}

interface ProcessListProps {
  items: ProcessItem[];
}

const ProcessList: React.FC<ProcessListProps> = ({ items }) => {
  const itemsPerColumn = Math.ceil(items.length / 3);
  
  return (
    <div className="process-list">
      <div className="process-list-column">
        {items.slice(0, itemsPerColumn).map((item, index) => (
          <ProcessStep
            key={index}
            number={index + 1}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
      <div className="process-list-column">
        {items.slice(itemsPerColumn, itemsPerColumn * 2).map((item, index) => (
          <ProcessStep
            key={index + itemsPerColumn}
            number={index + itemsPerColumn + 1}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
      <div className="process-list-column">
        {items.slice(itemsPerColumn * 2).map((item, index) => (
          <ProcessStep
            key={index + itemsPerColumn * 2}
            number={index + itemsPerColumn * 2 + 1}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </div>
  );
};

export default ProcessList;