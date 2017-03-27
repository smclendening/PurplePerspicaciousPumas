import React from 'react';
import { Col, ListGroup, ListGroupItem } from 'react-bootstrap';

const Rules = (props) => (
  <Col>
    <h4>Game Rules:</h4>
    <Col id="rules">
      <ListGroup>
        <ListGroupItem><b>1. </b>Each round, one player will take a turn as the judge. There are 
        four rounds, so each player will have one turn as the judge.</ListGroupItem>
        <ListGroupItem><b>2. </b>The judge's role is to pick the funniest response submitted by the other players.</ListGroupItem>
        <ListGroupItem><b>3. </b>If the game is a <em>User-Generated Prompt game</em>, the judge will start the round
        by creating the prompt for that round. If the game is a <em>Random Prompt</em> game, each round's prompt
        will be randomly generated.</ListGroupItem>
        <ListGroupItem><b>4. </b>Then, each player will try to come up with 
        the funniest response to the prompt.</ListGroupItem>
        <ListGroupItem><b>5. </b> Once all players have submitted a response, the judge will select the
        funniest response.</ListGroupItem>
        <ListGroupItem><b>6. </b> This will repeat for four rounds until all players have taken a turn as the judge.</ListGroupItem>
        <ListGroupItem><b>7. </b> After the fourth round, we declare the winner!</ListGroupItem>
        <ListGroupItem><b>8. </b> Round 1 will begin 15 seconds after the fourth and final player has joined the Waiting Room. Enjoy! </ListGroupItem>
      </ListGroup>
    </Col>
  </Col>
)


export default Rules;