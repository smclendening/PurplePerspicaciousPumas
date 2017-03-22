import React from 'react';

class PlayingGame extends React.Component{
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div id="playing-game">
        <h2>Playing Game</h2>
        <div>
          <h3>Current Judge</h3>
          <h3>Prompt</h3>
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