// your Bomb code here!
import React, { Component } from 'react';

class Bomb extends Component{
  constructor(props){
    super()
    this.state={
      secondsLeft: props.initialCount
    }
  }

  renderText = () => {
    if (this.state.secondsLeft === 0) {
      return 'Boom!'
    } else {
      return  `${this.state.secondsLeft} seconds left before I go boom!`
    }
  }

  render(){

    return(
      <h3>{this.renderText()}</h3>
    )
  }
}

export default Bomb;
