import React from 'react';

const Winner = (props) => (
  <div id="winner">
  	{props.responses.map((response) => (
  			<div> 
  				{response[1] === props.winner && Winner! }{response[0]} {response[1]}  
  			</div>
  		))}
  </div>
)


export default Winner