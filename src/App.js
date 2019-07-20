import React from 'react';
import './App.css';
import HeroCard from './components/HeroCards'
import HeroInfo from './components/heroInfo'

function App() {
  return (
    <div className="container">
      <div className="selection-container">
        {
          HeroInfo.map((hero, key) => {
            return (
              <HeroCard
                key={`${hero.name}_${key}`}
                name={hero.name}
                src={hero.img}
              />
            )
          })
        }
      </div>
    </div>
  );
}

export default App;
