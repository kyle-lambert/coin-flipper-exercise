import React, { Component } from 'react';
import '../css/Coin.css'

class Coin extends Component {
  render() {
    return (
      <img
        className="Coin"
        src={this.props.coin.src}
        alt={this.props.coin.coin}
      >
      </img>
    );
  }
}

export default Coin;