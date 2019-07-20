import React from 'react';
import './HeroCards.css';

function HeroCard({name, src}) {
  return (
    <div className="heroes">
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
