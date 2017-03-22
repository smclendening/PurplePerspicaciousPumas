import React from 'react';
import Prompt from './PlayingGameComponents/Prompt.jsx';
import CurrentJudge from './PlayingGameComponents/CurrentJudge.jsx';
import PlayersResponding from './PlayingGameComponents/PlayersResponding.jsx';
// this.props.game = game instance object

class PlayingGame extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      role: null // can either be judge or player
    };
  }

  render() {
    var curRound = this.props.game.currentRound;
    var curPrompt = this.props.game.rounds[curRound].prompt;
    var curJudge = this.props.game.players[curRound];

    return (
      <div id="playing-game">
        <h2>Playing Game</h2>
        <div>
          <CurrentJudge judge={curJudge} />
          <Prompt prompt={curPrompt}/>
          <h3>Timer</h3>
        </div>
        <div>
        <h2>Depending on the stage of the round:</h2>
        <PlayersResponding/>
        <h3>Players Responding Component</h3>
        <h3>Select Winner Component</h3>
        <h3>See Responses Component</h3>
        <h3>Winner Component</h3>
        </div>
      </div>
      )
  }
}

export default PlayingGame;