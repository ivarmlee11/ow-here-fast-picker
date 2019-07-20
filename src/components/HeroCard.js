import React from 'react';
import './HeroCards.css';

function HeroCard({name, src, handleclick}) {
  return (
    <div 
      className="heroes"
      onClick={handleclick}
    >
        <h2>{name}</h2>
        <img 
          className="hero-img"
          src={src}
          alt={`Character portrait of the Overwatch Hero, ${name}`}
        />
    </div>
  );
}

export default HeroCard;
