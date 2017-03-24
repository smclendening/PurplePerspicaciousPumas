import React from 'react';
import SignUp from './SignUp.jsx';
import LogIn from './LogIn.jsx';

// props.game === game instance object

const Home = (props) => (
  <div id="home">
    <SignUp onSubmit={props.route.onSignUp}/>
    <LogIn onLogIn={props.route.onLogIn} />
  </div>
)


export default Home;