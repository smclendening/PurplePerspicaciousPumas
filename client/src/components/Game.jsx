import React from 'react';
import WaitingRoom from './WaitingRoom.jsx';
import PlayingGame from './PlayingGame.jsx';

class Game extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      stage: ['waiting', 'playing'],
      numPlayers: 1, // example
      players: ['Edward K. Chan'] // example
    };
  }

  render() {
    return (
      <div id="game">
        <h4>Game!</h4>
        {this.props.params.gamename}
        {this.state.stage[0] === 'waiting' && <WaitingRoom numPlayers={this.state.numPlayers} players={this.state.players}/>}
        {this.state.stage[1] === 'playing' && <PlayingGame/>}
      </div>
    )
  }
}

export default Game;