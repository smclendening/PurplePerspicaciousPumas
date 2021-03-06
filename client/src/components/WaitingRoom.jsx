import React from 'react';
import { Col, PageHeader, ListGroup, ListGroupItem } from 'react-bootstrap';

const WaitingRoom = (props) => (
  <Col id='waiting-room'>
  <PageHeader>{props.game.gameName} <small>Waiting Room</small></PageHeader>
    <h3>Number of Players: {props.game.players.length} / 4</h3>
    <br />
    <h4>Current Players:</h4>
    <Col sm={4} smOffset={4}>
      <ListGroup>
        {props.game.players.map( (player) => <ListGroupItem>{player}</ListGroupItem>)}
      </ListGroup>
    </Col>
  </Col>
)

export default WaitingRoom;


