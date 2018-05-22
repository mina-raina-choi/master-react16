import React, { Component, Fragment } from 'react';
import { createPortal } from "react-dom";

const MAX_PIZZAS = 20;

const eatPizza = (state, preps) => {
  const { pizzas } = state;
  if (pizzas < MAX_PIZZAS)
    return {
      pizzas: pizzas + 1
      // null
    }
   else
    return null
} 

class Controlled extends Component {
  state = {
    pizzas: 1
  };
  render() {
    const { pizzas } = this.state;
    return (
      <button onClick={this._handleClick}>{`I have eaten ${pizzas} ${
        pizzas === 1 ? "pizza" : "pizzas"
        }`}</button>
    );
  }
  _handleClick = () => {
    this.setState(eatPizza);
  };
}

class App extends Component {
  render() {
    return <Controlled />
  }
}



export default App;
