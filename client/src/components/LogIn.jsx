import React from 'react';
import $ from 'jquery';

class LogIn extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: '',
      error: false
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

  handleLogInAttempt(username, password) {
    $.ajax({
      url: 'http://orange-to-orange-staging.herokuapp.com/login',
      method: 'POST',
      headers: {'content-type': 'application/json'},
      data: JSON.stringify({'username': username, 'password': password}),
      success: () => {
        this.props.sendToLobby();
      },
      error: (err) => {
        this.setState({error: true});
      }
    });
  }

  render() {

    const errorMessage = <p>The username and password you entered did not match our records. Please double check and try again.</p>

    return (
      <div id="log-in">
        <h4>Log In to Existing Account</h4>
          {this.state.error && errorMessage}
          <input placeholder="Choose a username..." type="text" value={this.state.username} onChange={this.handleUsernameChange} />
          <input placeholder="Choose a password..." type="text" value={this.state.password} onChange={this.handlePasswordChange} />
          <button onClick={() => this.handleLogInAttempt(this.state.username, this.state.password)}>Submit</button>
      </div>
    )
  }
}
export default LogIn;