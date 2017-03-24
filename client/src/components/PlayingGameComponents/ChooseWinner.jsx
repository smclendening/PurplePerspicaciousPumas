import React from 'react';

class ChooseWinner extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <div id="choose-winner">
        {this.props.responses.map((response) => (
            <div onClick={this.props.handleJudgeSelection.bind(null, response[1])}> 
              Response: {response[0]} 
            </div>
          ))}
      </div>
    )
  }
}



export default ChooseWinner