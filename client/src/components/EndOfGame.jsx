import React from 'react';
import Score from './Score.jsx';
import RoundSummary from './RoundSummary.jsx';

const EndOfGame = (props) => {

	return (
	  <div id='EndOfGame'>
	    <h4>Game Over</h4>
	    <h3>Final Score</h3>
	    <Score game={props.game} />
	    <h4>Number of Players: {props.players.length} / 4</h4>
	    <ol>Players:
	      {props.players.map( (player) => <li>{player}</li>)}
	    </ol>
	  </div>
	)

}

export default EndOfGame;
