import React, { Component } from 'react';
import Coin from './Coin';
import '../css/Tracker.css'

class Tracker extends Component {
  static defaultProps = [
    { coin: 'heads', src: 'https://tinyurl.com/react-coin-heads-jpg' },
    { coin: 'tails', src: 'https://tinyurl.com/react-coin-tails-jpg' }
  ]
  constructor(props) {
    super(props);
    this.state = {
      curCoin: null,
      nFlips: 0,
      nHeads: 0,
      nTails: 0
    }
    this.handleClick = this.handleClick.bind(this);
  }

  flipCoin() {
    const winner = this.props[Math.floor(Math.random() * 2)];

    this.setState(st => {
      return {
        curCoin: winner,
        nFlips: st.nFlips + 1,
        nHeads: winner.coin === 'heads' ? st.nHeads + 1 : st.nHeads,
        nTails: winner.coin === 'tails' ? st.nTails + 1 : st.nTails,
      }
    })
  }

  handleClick() {
    this.flipCoin();
  }

  render() {
    return (
      <div className="Tracker">
        <h1>Lets flip a coin</h1>
        {this.state.curCoin ? <Coin coin={this.state.curCoin} /> : this.state.curCoin}
        <button onClick={this.handleClick} >Flip me!!!</button>
        <p>
          Out of {this.state.nFlips} flips,
          there have been {this.state.nHeads} heads
          and {this.state.nTails} tails.
        </p>
      </div>
    );
  }
}

export default Tracker;