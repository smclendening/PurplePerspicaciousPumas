import React from 'react';
import Prompt from './PlayingGameComponents/Prompt.jsx';
// this.props.game = game instance object

class PlayingGame extends React.Component{
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    var curRound = this.props.game.currentRound;
    var curPrompt = this.props.game.rounds[curRound].prompt;

    return (
      <div id="playing-game">
        <h2>Playing Game</h2>
        <div>
          <h3>Current Judge</h3>
          <Prompt prompt={curPrompt}/>
          <h3>Timer</h3>
        </div>
        <div>
        <h2>Depending on the stage of the round:</h2>
        <h3>Respond to Prompt Component</h3>
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