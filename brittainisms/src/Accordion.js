// src/Accordion.js
import React, { useState } from 'react';

const Accordion = ({ title, items }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="accordion">
      <div
        className={`accordion-header ${isOpen ? 'open' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        {title}
      </div>
      {isOpen && (
        <div className="accordion-content">
          <ul>
            {items.map((item, index) => (
              <li key={index}>
                <strong>{item.french}:</strong> {item.english}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Accordion;