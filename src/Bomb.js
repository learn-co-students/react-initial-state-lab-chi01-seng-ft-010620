import React, { Component } from 'react'

// your Bomb code here!
export default class Bomb extends Component {

    constructor(props) {
        super()
        this.state = {
            secondsLeft: props.initialCount
        }
    }

    render() {

        return (this.state.secondsLeft === 0 ? <h1>Boom!</h1> : <h2>{this.state.secondsLeft} seconds left before I go boom!</h2>)
    }

}