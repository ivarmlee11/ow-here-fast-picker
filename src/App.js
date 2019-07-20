import React from 'react';
import './App.css';
import HeroCard from './components/HeroCard'
import HeroPickingLoader from './components/HeroPickingLoader'
import HeroInfo from './components/heroInfo'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      autoPickingInProgress: false,
      counter: 5
    };
    this.handHeroSelect = this.handHeroSelect.bind(this);
  }

  handHeroSelect() {
    this.setState({
      autoPickingInProgress: true
    }, () => {
      let counter = 5;
      setInterval(()=> {
        counter --;
        if (counter === 0) {
          counter = 5;
          this.setState({
            autoPickingInProgress: false,
            counter: 5
          })
        } else {
          this.setState({
            counter
          })
        }
      }, 1000);
    })
  }
  
  render() {
    if (!this.state.autoPickingInProgress) {
      return (
        <HeroPickingLoader
          counter={this.state.counter}
        />
      )
    } else {
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
                    handleclick={this.handHeroSelect}
                  />
                )
              })
            }
          </div>
        </div>
      );
    }
  }
}

export default App;
