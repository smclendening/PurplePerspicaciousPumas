import React from 'react';
import SignUp from './SignUp.jsx';
import LogIn from './LogIn.jsx';

// props.game === game instance object

const Home = (props) => (
  <div id="home">
    <SignUp sendToLobby={props.route.sendToLobby}/>
    <LogIn sendToLobby={props.route.sendToLobby} />
  </div>
)


export default Home;