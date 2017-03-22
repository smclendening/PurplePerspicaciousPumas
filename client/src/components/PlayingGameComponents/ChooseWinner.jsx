import React from 'react';

class ChooseWinner extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <div id="choose-winner">
        {props.responses.map((response) => (
            <div> 
              Response: {response[0]} 
            </div>
          ))}
      </div>
    )
  }
}



export default ChooseWinner