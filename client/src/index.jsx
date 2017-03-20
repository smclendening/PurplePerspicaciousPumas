import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import SignUp from './components/SignUp.jsx';
import io from 'socket.io-client';

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
        }
        this.handleSignUp = this.handleSignUp.bind(this);
        this.connectToSocket = this.connectToSocket.bind(this);
    }
    componentDidMount() {
        var socket = io.connect('http://localhost:3000');
        socket.on('connect', function() {
            console.log('Connected');
        });
        socket.on('disconnect', function() {
            console.log('disconnected');
        });
        
    }
    connectToSocket() {
        console.log('trying to connect');
    }
    handleSignUp(email, username, password) {
        var context = this;
        $.ajax({
            url: 'http://localhost:3000/signup',
            method: 'POST',
            headers: {'content-type': 'application/json'},
            data: JSON.stringify({'email': email, 'username': username, 'password': password}),
            success: (data) => {
                console.log('added user to users DB');
                context.connectToSocket();
            },
            error: (err) => {
                console.log('error in username POST: ', err);
            }
        });
    }
    render() {
        return (
            <div>
                <h1>Oranges To Oranges</h1>
                <SignUp onSubmit={this.handleSignUp}/>
            </div>
        );
    }
}
ReactDOM.render(
  <App/>,
  document.getElementById('app')
);
