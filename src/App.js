import React, { Component } from 'react';
import './App.css';
import logo from './logo.svg'
import Quote from './Components/Quote'
import Lamp from './Components/Lamp'


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        on: false
      };
  } 
  handleClick = () => {
    this.setState({on: !this.state.on});
  };
  render() {
      const atWork = this.state.on ?'Homer in working' : 'Homer is NOOOOT working';
      const spinning = this.state.on ? ' faster' : 'App-logo';
      return (
      <div className="App">
        <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Simpsons Quotes</h1>
          <button onClick={this.handleClick}
          className={atWork}>{atWork} </button>
        </header>
        <Lamp on/>
        <Lamp />
        <Quote
          quote="I believe the children are the future... Unless we stop them now!"
          character="Homer Simpson"
          image="https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FHomerSimpson.png?1497567511939"
        />
        <Quote
          quote="Me fail English? That's unpossible"
          character="Ralph Wiggum"
          image="https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FRalphWiggum.png?1497567511523"
        />
      </div>
    );
  }
}

export default App;
