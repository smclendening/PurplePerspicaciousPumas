import React from 'react';

class LogIn extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: ''
    }
    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
  }


  handleUsernameChange(event) {
    this.setState({
      username: event.target.value
    });
  }

  handlePasswordChange(event) {
    this.setState({
      password: event.target.value
    });
  }

  render() {
    return (
      <div id="log-in">
        <h4>Log In to Existing Account</h4>
          <input placeholder="Choose a username..." type="text" value={this.state.username} onChange={this.handleUsernameChange} />
          <input placeholder="Choose a password..." type="text" value={this.state.password} onChange={this.handlePasswordChange} />
          <button onClick={() => this.props.onSubmit(this.state.username, this.state.password)}>Submit</button>
      </div>
    )
  }
}
export default LogIn;