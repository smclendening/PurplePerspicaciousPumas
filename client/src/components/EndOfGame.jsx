import React from 'react';
import Score from './PlayingGameComponents/Score.jsx';
import RoundSummary from './RoundSummary.jsx';

const EndOfGame = (props) => {


	return (
	  <div id='EndOfGame'>
	    <h4>Game Over</h4>
	    <h4>Final Score</h4>
	    <Score game={props.game} />
	    <br />
	    <RoundSummary round={props.game.rounds[3]} judge={props.game.players[3]}/>
	    <br />
	    <RoundSummary round={props.game.rounds[2]} judge={props.game.players[2]}/>
	    <br />
	    <RoundSummary round={props.game.rounds[1]} judge={props.game.players[1]}/>
	    <br />
	    <RoundSummary round={props.game.rounds[0]} judge={props.game.players[0]}/>
	    <br />
	  </div>
	)

}

export default EndOfGame;
