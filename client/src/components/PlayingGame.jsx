import React from 'react';
import Prompt from './PlayingGameComponents/Prompt.jsx';
import CurrentJudge from './PlayingGameComponents/CurrentJudge.jsx';
import PlayersResponding from './PlayingGameComponents/PlayersResponding.jsx';
import SeeResponses from './PlayingGameComponents/SeeResponses.jsx';
import Winner from './PlayingGameComponents/Winner.jsx'
import RespondToPrompt from './PlayingGameComponents/RespondToPrompt.jsx';
// this.props.game = game instance object

class PlayingGame extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      role: null // can either be judge or player
    };

    this.getRole = this.getRole.bind(this);
  }

  componentDidMount() {
    this.getRole();
  }

  getRole() {
    // if your index in players arr equals curRound, you're the judge
    var curRound = this.props.game.currentRound;
    console.log('HEY', this.props.user);
    if (this.props.game.players[curRound] === this.props.user) {
      this.setState({role: 'judge'})
    } else {
      console.log('player in index: ', this.props.game.players[curRound]);
      console.log('props user: ', this.props.user);
    // otherwise you are player
      this.setState({role: 'player'})
    }
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
        {this.state.role === 'judge' && <PlayersResponding />}
        {this.state.role === 'player' && <RespondToPrompt />}
        <h3>Select Winner Component</h3>
        {this.props.game.rounds[curRound].stage === 1 && <SeeResponses responses={this.props.game.rounds[curRound].responses}/>}
        <h3>Winner Component</h3>
        {this.props.game.rounds[curRound].stage === 2 && <Winner responses={this.props.game.rounds[curRound].responses} winner={this.props.game.rounds[curRound].winner}/>}

        </div>
      </div>
      )
  }
}

export default PlayingGame;