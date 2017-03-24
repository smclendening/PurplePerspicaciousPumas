import React from 'react';

class Score extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    let players = this.props.game.players;
    let rounds = this.props.game.rounds;
    let scores = {};
    players.forEach(function(player) {
      scores[player] = 0;
    });
    rounds.forEach(function(round) {
      if (round.winner.length > 0) {
        scores[round.winner]++;
      }
    });
    return (
      <div id="score">
      <div><strong>Scores!</strong></div>
      {Object.keys(scores).map((username) => 
        <div> {username}: {scores[username]} </div>
        )}
      </div>
    )
  }
}



export default Score;