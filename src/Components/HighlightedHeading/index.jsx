import React from 'react';

const HighlightedHeading = ({ children, className = '', }) => {
  return (
    <span className={`relative inline-block pr-2 ${className}`}>
      {children}
      <span
        className="absolute left-0 right-0 bottom-0 bg-orange opacity-60 h-3"
        // style={{ height: `${height}px` }}
        aria-hidden="true"
      />
    </span>
  );
};

export default HighlightedHeading;
