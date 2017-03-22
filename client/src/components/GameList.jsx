import React from 'react';
import SignUp from './SignUp.jsx';
import LogIn from './LogIn.jsx';

const GameList = (props) => (
  <div id="GameList">
    <SignUp onSubmit={props.route.onSignUp}/>
    <LogIn onSubmit={props.route.onLogIn} />
  </div>
)


export default GameList;