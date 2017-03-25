import React from 'react';
import $ from 'jquery';
import { Button, Form, FormGroup, Col, FormControl, ControlLabel, PageHeader } from 'react-bootstrap';

class CreateGame extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      gameName: ''
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({gameName: event.target.value});
  }

  addGameToDB(gameName, callback) {
    var gameInstance = {
      gameName: gameName,
      password: '',
      players: [],
      rounds: [
      {prompt: 'prompt 1', responses: [], winner: '', stage: 0, ready: []}, 
      {prompt: 'prompt 2', responses: [], winner: '', stage: 0, ready: []}, 
      {prompt: 'prompt 3', responses: [], winner: '', stage: 0, ready: []}, 
      {prompt: 'prompt 4', responses: [], winner: '', stage: 0, ready: []}],
      currentRound: 0
    }

    $.ajax({
      url: 'http://localhost:3000/games',
      method: 'POST',
      headers: {'content-type': 'application/json'},
      data: JSON.stringify(gameInstance),
      success: (data) => {
        callback(gameName);
      },
      error: (err) => {
        console.log('error in login POST: ', err);
      }
    });
  }

  render() {
    return (
      <div id="choose-username">
        <h4>Start a New Game</h4>
          <input placeholder="Name your game..." type="text" value={this.state.gameName} onChange={this.handleChange} />
          <button onClick={() => this.addGameToDB(this.state.gameName, this.props.sendToGame)}>Submit</button>
      </div>
    )

    // TODO: figure out the CreateGame component with React-Bootstrap (started below)
    // return (
    //   <div id="create-game">
    //   <Form inline>
    //     <FormGroup>
    //       <Col sm={10}>
    //         <FormControl type="name" placeholder="Name your game..." value={this.state.gameName} onChange={this.handleChange} />
    //       </Col>
    //     </FormGroup>
    //     <Col sm={2}>
    //       <Button type="submit" onClick={() => this.addGameToDB(this.state.gameName, this.props.sendToGame)}>
    //         Create New Game
    //       </Button>
    //     </Col>
    //   </Form>

    //   </div>
    // )
  }
}
export default CreateGame;