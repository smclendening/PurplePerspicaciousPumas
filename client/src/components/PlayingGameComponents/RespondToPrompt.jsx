import React from 'react';

class RespondToPrompt extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      response: ''
    }

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    this.setState({
      response: event.target.value
    });
  }

  render() {
    return (
      <div id="choose-username">
          <b>Player Response: </b><input type="text" value={this.state.value} onChange={this.handleInputChange} />
          <button onClick={() => this.props.onSubmit(this.state.response)}>Submit</button>
      </div>
    )
  }
}


export default RespondToPrompt;