import React from 'react';
import '../styles/bento.css';
import BentoBlock from './bento/BentoBlock';

const BentoGrid = () => {
  return (
    <div className="bento-fullscreen-grid">
      {/* Ligne 1 */}
      <BentoBlock className="bento1" />
      <BentoBlock className="bento2" />
      <BentoBlock className="bento3" />
      {/* Ligne 2 */}
      <BentoBlock className="bento4" />
      <BentoBlock className="bento5" />
      <BentoBlock className="bento6" />
      {/* Ligne 3 */}
      <BentoBlock className="bento7" />
      <BentoBlock className="bento8" />
      <BentoBlock className="bento9" />
      {/* Ligne 4 */}
      <BentoBlock className="bento10" />
      <BentoBlock className="bento11" />
    </div>
  );
};

export default BentoGrid; 