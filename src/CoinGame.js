import React, { Component } from "react";
import Coin from "./Coin";
import Counter from "./Counter";

class CoinGame extends Component {
    constructor(props) {
        super(props);
        this.state = {
            coinSide: "heads",
            totalFlips: 0,
            headsIdx: 0,
            tailsIdx: 0
        };
        this.handleClick = this.handleClick.bind(this);
    }

    flipCoin() {
        const sides = ["heads", "tails"];
        return sides[Math.floor(Math.random() * 2)];
    }

    handleClick() {
        let newCoinSide = this.flipCoin();

        this.setState(st => {
            let newState = {
                ...st,
                coinSide: newCoinSide,
                totalFlips: st.totalFlips + 1
            };
            if (newCoinSide === "heads") {
                newState.headsIdx += 1;
            } else {
                newState.tailsIdx += 1;
            }

            return newState;
        });
    }

    render() {
        return (
            <div className="CoinGame">
                <h1>Let's flip a coin!</h1>
                <Coin side={this.state.coinSide} />
                <button onClick={this.handleClick}>FLIP ME</button>
                <Counter
                    flips={this.state.totalFlips}
                    heads={this.state.headsIdx}
                    tails={this.state.tailsIdx}
                />
            </div>
        );
    }
}

export default CoinGame;
