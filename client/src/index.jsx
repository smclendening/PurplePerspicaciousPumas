import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import SignUp from './components/SignUp.jsx';
import { Router, Route, hashHistory } from 'react-router';
import Lobby from './components/Lobby.jsx';
import Home from './components/Home.jsx';
import Game from './components/Game.jsx';
// import io from 'socket.io-client';

class App extends React.Component {
    constructor(props){
      super(props);
      this.state = {}

      this.handleSignUp = this.handleSignUp.bind(this);
      this.handleLogIn = this.handleLogIn.bind(this);
      this.sendToGame = this.sendToGame.bind(this);
    }

    handleSignUp(email, username, password) {
      hashHistory.push('/lobby');
    }

    handleLogIn() {
      hashHistory.push('/lobby');
    }

    sendToGame(gameName) {
      hashHistory.push(/game/ + gameName);
    }

    render() {
      return (
        <div>
          <Router history={hashHistory}>
            <Route path="/" component={Home} handleSignUp={this.handleSignUp} handleLogIn={this.handleLogIn}/>
            <Route path="/lobby" component={Lobby} sendToGame={this.sendToGame}/>
            <Route path="/game/:gamename" component={Game} />
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

