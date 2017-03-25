import React from 'react';
import $ from 'jquery';

class SignUp extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      username: '',
      password: '',
      error: false
    }
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
  }

  handleEmailChange(event) {
    this.setState({
      email: event.target.value
    });
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

  handleSignUpAttempt(email, username, password) {
    $.ajax({
      url: 'https://orange-to-orange-staging.herokuapp.com/#/signup',
      method: 'POST',
      headers: {'content-type': 'application/json'},
      data: JSON.stringify({'username': username, 'email': email, 'password': password}),
      success: (data) => {
        this.props.sendToLobby();
      },
      error: (err) => {
        this.setState({error: true});
      }
    });
  }

  render() {

    const errorMessage = <p>That username is already taken. Please try again with a different username.</p>

    return (
      <div id="choose-username">
        <h4>Create a New Account</h4>
          {this.state.error && errorMessage}
          <input placeholder="Email..." type="text" value={this.state.email} onChange={this.handleEmailChange} />
          <input placeholder="Choose a username..." type="text" value={this.state.username} onChange={this.handleUsernameChange} />
          <input placeholder="Choose a password..." type="text" value={this.state.password} onChange={this.handlePasswordChange} />
          <button onClick={() => this.handleSignUpAttempt(this.state.email, this.state.username, this.state.password)}>Submit</button>
      </div>
    )
  }
}
export default SignUp;