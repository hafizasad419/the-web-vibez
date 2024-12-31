import React from 'react';

const HighlightedHeading = ({ children, className = '', height = 3 }) => {
  return (
    <span className={`relative inline-block ${className}`}>
      {children}
      <span
        className={`absolute left-0 right-0 bottom-0 bg-orange opacity-60 h-${height}`}
        aria-hidden="true"
      />
    </span>
  );
};

export default HighlightedHeading;
