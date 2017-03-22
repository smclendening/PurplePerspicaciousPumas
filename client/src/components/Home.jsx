import React from 'react';
import SignUp from './SignUp.jsx';
import LogIn from './LogIn.jsx';

const Home = (props) => (
  <div id="home">
    <SignUp onSubmit={props.route.onSignUp}/>
    <LogIn onSubmit={props.route.onLogIn} />
  </div>
)


export default Home;