import React from 'react';

const SeeResponses = (props) => (
  <div id="see-responses">
  	{props.responses.map((response) => (
  			<div> 
  				{response[0]} {response[1]} 
  			</div>
  		))}
  </div>
)


export default SeeResponses