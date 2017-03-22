import React from 'react';
import WaitingRoom from './WaitingRoom.jsx';

class Game extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      stage: 'waiting',
      numPlayers: 1, // example
      players: ['Edward K. Chan'] // example
    };
  }

  render() {
    return (
      <div id="game">
        <h4>Game!</h4>
        {this.props.params.gamename}
        {this.state.stage === 'waiting' && <WaitingRoom numPlayers={this.state.numPlayers} players={this.state.players}/>}
      </div>
    )
  }
}

export default Game;