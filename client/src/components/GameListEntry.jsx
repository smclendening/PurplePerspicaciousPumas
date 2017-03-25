import React from 'react';
import { ListGroupItem } from 'react-bootstrap';

const GameListEntry = (props) => {

  var playerList = '';

  props.game.players.forEach(function(player) {
    playerList += (player + ', ');
  })

  return (
    <ListGroupItem header={props.name} onClick={() => props.sendToGame(props.name)}><em>Current Players:</em> {playerList}</ListGroupItem>
  )
}


export default GameListEntry;