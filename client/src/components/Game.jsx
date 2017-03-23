import React from 'react';
import WaitingRoom from './WaitingRoom.jsx';
import PlayingGame from './PlayingGame.jsx';
import $ from 'jquery';
import io from 'socket.io-client';

class Game extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      game: null,
      user: null
    };

    this.getGameData = this.getGameData.bind(this);
  }

  componentDidMount() {
    this.getGameData(this.props.params.gamename);
    console.log('join the socket');
    const socket = io();

    socket.emit('join game', this.props.params.gamename);
  }

  getGameData(gameName) {
    // use gameName to retrieve gameInstance obj of that game
    $.ajax({
      url: 'http://localhost:3000/game',
      method: 'GET',
      headers: {'content-type': 'application/json'},
      data: {name: gameName},
      success: (data) => {
        this.setState({
          game: data[0]
        })

        var numPlayers = data[0].players.length;

        this.setState({
          user: data[0].players[numPlayers - 1]
        })
      },
      error: (err) => {
          console.log('error getting games: ', err);
      }
    });
  }

  render() {
    return (
      <div id="game">
        <h4>Game!</h4>
        {this.props.params.gamename}
        {this.state.game && this.state.game.gameStage === 'waiting' && <WaitingRoom numPlayers={this.state.game.players.length} players={this.state.game.players}/>}
        {this.state.game && this.state.user && this.state.game.gameStage === 'playing' && <PlayingGame game={this.state.game} user={this.state.user}/>}
      </div>
    )
  }
}

export default Game;