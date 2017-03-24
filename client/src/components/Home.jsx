import React from 'react';
import SignUp from './SignUp.jsx';
import LogIn from './LogIn.jsx';

// props.game === game instance object

const Home = (props) => (
  <div id="home">
    <SignUp handleSignUp={props.route.handleSignUp}/>
    <LogIn handleLogIn={props.route.handleLogIn} />
  </div>
)


export default Home;