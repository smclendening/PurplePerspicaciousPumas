import React from 'react';

const WaitingRoom = (props) => (
  <div id='waiting-room'>
    <h4>Waiting Room</h4>
    <h4>Number of Players: {props.numPlayers} / 4</h4>
    <ol>Players:
      {props.players.map( (player) => <li>{player}</li>)}
    </ol>
  </div>
)

export default WaitingRoom;


