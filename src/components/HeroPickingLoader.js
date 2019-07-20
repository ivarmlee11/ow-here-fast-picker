import React from 'react';
import './HeroPickingLoader.css';

function HeroPickingLoader({counter}) {
  return (
    <div className="hero-picking-loader-container">
        <div className="hero-picking-loader">
            <h1>Switch to overwatch! The auto picker is about to start!!!</h1>
            <div>{counter}</div>
        </div>
    </div>
  );
}

export default HeroPickingLoader;
