import React from 'react';

const RoundSummary = (props) => (
  <div id="RoundSummary">
  <div>
  	'Judge: '{props.Judge} 'Prompt: ' {props.prompt}
  </div>
  	{props.responses.map((response) => (
  			<div> 
  				{response[1] === props.winner && 'WON: ' }{response[0]} {response[1]}  
  			</div>
  		))}
  </div>
)


export default RoundSummary