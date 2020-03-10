// your ImageSlider code here!
import React, { Component } from 'react';

class ImageSlider extends Component{
  constructor(){
    super()
    this.state={
      currentSlideIndex: 0
    }
  }

  renderText = () => {
    // if (this === this.state.currentSlideIndex) {
    return `I am on slide ${this.state.currentSlideIndex}`
    // }
  }

  render(){
    return(
      <h3>{this.renderText()}</h3>
    )
  }
}

export default ImageSlider;


// 2.  It should only render out the text `'I am on slide <CURRENT_SLIDE>'`, where
//     `<CURRENT_SLIDE>` is the value of `this.state.currentSlideIndex`.
