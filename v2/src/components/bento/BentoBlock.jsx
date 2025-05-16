import React from 'react';

const BentoBlock = ({ className = '', children }) => {
  return (
    <div className={`bento-block ${className}`.trim()}>
      {children}
    </div>
  );
};

export default BentoBlock; 