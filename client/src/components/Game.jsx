import React from 'react';
import WaitingRoom from './WaitingRoom.jsx';

class Game extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      stage: 'waiting'
    };
  }

  render() {
    return (
      <div id="game">
        <h4>Game!</h4>
        {this.props.params.gamename}
        {this.state.stage === 'waiting' && <WaitingRoom />}
      </div>
    )
  }
}

export default Game;