import React from 'react';

class CreateGame extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      gameName: ''
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      gameName: event.target.value
    });
  }

  render() {
    return (
      <div id="choose-username">
        <h4>Start a New Game</h4>
          <input placeholder="Start a new game..." type="text" value={this.state.gameName} onChange={this.handleChange} />
          <button onClick={() => this.props.onClick(this.state.gameName)}>Submit</button>
      </div>
    )
  }
}
export default CreateGame;