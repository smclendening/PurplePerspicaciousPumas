import React from 'react';
class SignUp extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      username: '',
      password: ''
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
  render() {
    return (
      <div id="choose-username">
        <h4>Create a New Account</h4>
        <form onSubmit={() => this.props.onSubmit(this.state.email, this.state.username, this.state.password)}> 
          <input placeholder="Email..." type="text" value={this.state.email} onChange={this.handleEmailChange} />
          <input placeholder="Choose a username..." type="text" value={this.state.username} onChange={this.handleUsernameChange} />
          <input placeholder="Choose a password..." type="text" value={this.state.password} onChange={this.handlePasswordChange} />
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}
export default SignUp;