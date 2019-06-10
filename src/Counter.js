import React, { Component } from "react";

class Counter extends Component {
    render() {
        return (
            <h1>Out of {this.props.flips} flips, there have been {this.props.heads} heads and {this.props.tails} tails</h1>
        );
    }
}

export default Counter;

