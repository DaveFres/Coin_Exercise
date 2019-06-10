import React, { Component } from "react";
import './Coin.css';

class Coin extends Component {
    render() {
        let image;

        if (this.props.side === "heads") {
            image = <img className="Coin-img" src="https://upload.wikimedia.org/wikipedia/commons/c/cd/S_Half_Dollar_Obverse_2016.jpg" alt="Coin"/>;
        } else {
            image = <img className="Coin-img" src="http://www.pcgscoinfacts.com/UserImages/71009269r.jpg" alt="Coin"/>
        }

        return (
            <div className="Coin">
                 {image}
            </div> 
        );
    }
}

export default Coin;