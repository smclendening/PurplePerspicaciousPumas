import React from 'react';

class ChooseUsername extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      username: ''
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      username: event.target.value
    });
  }

  render() {
    return (
      <div id="choose-username">
        <form onSubmit={() => this.props.onSubmit(this.state.username)}> 
          <input placeholder="Choose a username..." type="text" value={this.state.username} onChange={this.handleChange} />
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}

export default ChooseUsername;