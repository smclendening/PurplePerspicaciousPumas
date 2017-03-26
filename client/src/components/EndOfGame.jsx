import React from 'react';
import Score from './PlayingGameComponents/Score.jsx';
import RoundSummary from './RoundSummary.jsx';
import { Col, PageHeader, ListGroup, ListGroupItem } from 'react-bootstrap';

const EndOfGame = (props) => {
	return (
		<Col id="end-of-game">
		  <PageHeader>Game Over</PageHeader>
	    <Col sm={6} smOffset={3}>
	      <h4>Final Score</h4>
	      <Score game={props.game}/>
			  <br />
			  <RoundSummary round={props.game.rounds[3]} judge={props.game.players[3]}/>
			  <br />
			  <RoundSummary round={props.game.rounds[2]} judge={props.game.players[2]}/>
			  <br />
			  <RoundSummary round={props.game.rounds[1]} judge={props.game.players[1]}/>
			  <br />
			  <RoundSummary round={props.game.rounds[0]} judge={props.game.players[0]}/>
			  <br />
	    </Col>
		</Col>

	)

}

export default EndOfGame;

// <Col id="playing-game">
//   <PageHeader>{this.props.game.gameName}: <small>Round {this.props.game.currentRound + 1} - Judge: {curJudge}</small></PageHeader>
//     <Col sm={6} smOffset={3}>
//       <h4>Scoreboard</h4>
//       <Score game={this.props.game}/>
//     </Col>
//     <Col sm={6} smOffset={3}>
//       <Prompt prompt={curPrompt}/>
//     </Col>
//   <Col sm={6} smOffset={3}>
//   {stage === 0 && this.state.role === 'judge' && <PlayersResponding />}
//   {stage === 0 && this.state.role === 'player' && <RespondToPrompt handleResponse={this.props.handleResponse}/>}
//   {stage === 1 && this.state.role === 'judge' && <ChooseWinner responses={responses} handleJudgeSelection={this.props.handleJudgeSelection}/>}
//   {stage === 1 && this.state.role === 'player' && <SeeResponses responses={responses}/>}
//   {stage === 2 && <Winner responses={responses} winner={winner} handleReadyToMoveOn={this.props.handleReadyToMoveOn}/>}
//   </Col>
// </Col>

// <div id='EndOfGame'>
//   <h4>Game Over</h4>
//   <h4>Final Score</h4>
//   <Score game={props.game} />
//   <br />
//   <RoundSummary round={props.game.rounds[3]} judge={props.game.players[3]}/>
//   <br />
//   <RoundSummary round={props.game.rounds[2]} judge={props.game.players[2]}/>
//   <br />
//   <RoundSummary round={props.game.rounds[1]} judge={props.game.players[1]}/>
//   <br />
//   <RoundSummary round={props.game.rounds[0]} judge={props.game.players[0]}/>
//   <br />
//   <button onClick={props.sendToLobby}>Return to Lobby</button>
// </div>

