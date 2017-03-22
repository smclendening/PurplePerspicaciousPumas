import React from 'react';

class Lobby extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      games: null
    }
    this.getGames = this.getGames.bind(this);
  }

  componentDidMount() {
    this.getGames();
  }

  getGames() {
    $.ajax({
      url: 'http://localhost:3000/games',
      method: 'GET',
      headers: {'content-type': 'application/json'},
      success: (data) => {
        console.log('got games: ', data);
      },
      error: (err) => {
          console.log('error in username POST: ', err);
      }
    });
  }

  render() {
    return (
      <div id="lobby">
        <h4>Lobby!</h4>
      </div>
    )
  }
}
export default Lobby;