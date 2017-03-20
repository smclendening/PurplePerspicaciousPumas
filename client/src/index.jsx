import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import SignUp from './components/SignUp.jsx';
class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
        }
        this.handleSignUp = this.handleSignUp.bind(this);
        this.connectToSocket = this.connectToSocket.bind(this);
    }
    componentDidMount() {}
    connectToSocket() {
        console.log('trying to connect');
        var socket = io();
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
