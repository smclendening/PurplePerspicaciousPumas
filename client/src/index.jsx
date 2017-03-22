import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import SignUp from './components/SignUp.jsx';
import { Router, Route, browserHistory } from 'react-router';
import Lobby from './components/Lobby.jsx';
// import io from 'socket.io-client';

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
        }
        this.handleSignUp = this.handleSignUp.bind(this);
    }

    handleSignUp(email, username, password) {
      $.ajax({
        url: 'http://localhost:3000/signup',
        method: 'POST',
        headers: {'content-type': 'application/json'},
        data: JSON.stringify({'username': username, 'email': email, 'password': password}),
        success: (data) => {
          console.log('added user to users DB');
          console.log(data);
          browserHistory.push('/lobby');
        },
        error: (err) => {
            console.log('error in username POST: ', err);
        }
      });
    }

    render() {
      return (
        <div>
          <Router history={browserHistory}>
            <Route path="/" component={SignUp} onSubmit={this.handleSignUp} />
            <Route path="/lobby" component={Lobby} />
          </Router>
        </div>
      );
    }
}
             //   <SignUp onSubmit={this.handleSignUp}/>

ReactDOM.render(
  <App/>,
  document.getElementById('app')
);

