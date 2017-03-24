import React from 'react';
import GameList from './GameList.jsx';
import $ from 'jquery';
import CreateGame from './CreateGame.jsx';

//TODO:
  // build logic to prevent users from joining a full game

class Lobby extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      games: null,
      username: null
    }
    this.getGames = this.getGames.bind(this);
    this.getUsername = this.getUsername.bind(this);
  }

  componentDidMount() {
    this.getGames();
    this.getUsername();
  }

  getGames() {
    $.ajax({
      url: 'http://localhost:3000/games',
      method: 'GET',
      headers: {'content-type': 'application/json'},
      success: (data) => {
        console.log('got games: ', data);
        this.setState({
          games: data
        })
      },
      error: (err) => {
          console.log('error getting games: ', err);
      }
    });
  }

  getUsername() {
    $.ajax({
      url: 'http://localhost:3000/username',
      method: 'GET',
      headers: {'content-type': 'application/json'},
      success: (username) => {
        this.setState({username: username});
        console.log('got username in Lobby: ', username);
      },
      error: (err) => {
        console.log('error getting username', err);
      }
    });
  }

  render() {
    return (
      <div id="lobby">
        <h3>Lobby</h3>
        <h4>Games:</h4>
        {this.state.games && <GameList games={this.state.games} onClick={this.props.route.sendToGame}/>}
        {this.state.username && <CreateGame onClick={this.props.route.sendToGame}/>}
      </div>
    )
  }
}
export default Lobby;