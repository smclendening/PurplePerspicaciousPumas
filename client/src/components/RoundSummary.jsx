import React from 'react';

const RoundSummary = (props) => (
  <div id="RoundSummary">
  <div>
  	'Judge: '{props.judge} 'Prompt: ' {props.round.prompt}
  </div>
  	{props.round.responses.map((response) => (
  			<div> 
  				{response[1] === props.round.winner && 'WON: ' }{response[0]} {response[1]}  
  			</div>
  		))}
  </div>
)


export default RoundSummary