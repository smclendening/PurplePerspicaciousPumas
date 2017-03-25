import React from 'react';
import { PageHeader } from 'react-bootstrap';

const WaitingRoom = (props) => (
  <div id='waiting-room'>
  <PageHeader>{props.game.gameName} <small>Waiting Room</small></PageHeader>
    <h4>Number of Players: {props.game.players.length} / 4</h4>
    <ol>Players:
      {props.game.players.map( (player) => <li>{player}</li>)}
    </ol>
  </div>
)

export default WaitingRoom;


