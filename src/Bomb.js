import React from "react";

export default class Bomb extends React.Component {
    constructor(props) {
        super()
        this.state = {
            secondsLeft: props.initialCount
        }
    }

    render() {
        console.log(this.state.secondsLeft)
        return (
            <div>
                {this.state.secondsLeft === 0 ? "Boom!" : this.state.secondsLeft + " seconds left before I go boom!"}
            </div>
        )
    }
}