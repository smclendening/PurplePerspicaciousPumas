import React from 'react';

class RespondToPrompt extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      response: '',
      responded: false
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
          {!this.state.responded && <b>Submit Response:</b> && <input type="text" value={this.state.value} onChange={this.handleInputChange} />}
          {!this.state.responded && <button onClick={() => {
              console.log('this: ', this);
              this.setState({
                responded: true
              })
              this.props.handleResponse(this.state.response)
            }
          }>Submit</button>}
          {this.state.responded && <p><b>Your response has been submitted!</b></p>}
      </div>
    )
  }
}


export default RespondToPrompt;