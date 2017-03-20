var express = require('express');
var app = express();
var port = process.env.PORT || 3000;
var bodyParser = require('body-parser');
var models = require('../db/index.js');
var mongoose = require('mongoose');
var passport = require('passport');
var session = require('express-session');
var redis = require('redis-url').connect();

var sessionStore = new RedisStore({ client: redis});

app.use(bodyParser.json());


app.use(session({
  store: sessionStore,
  resave: false,
  saveUninitialized: false,
  cookie: {
    secure: false,
    maxAge: 2419200000
  },
  secret: 'keyboard cat'
}));

app.use(passport.initialize());

app.use(passport.session());


app.use(express.static(__dirname + '/../client/dist'));

app.post('/users', function (req, res) {
  var username = req.body.username;
  var user = new models.userModel({
  	username: username
  });
  user.save(function(err) {
  	if (err) {
  		res.status(400).send('username exists')
  	} else {
  		res.status(201).send('success')
  	}
  })

});

var server = app.listen(port, function() {
  console.log('App is listening on port: ', port);
});

var io = require('socket.io')(server);

io.on('connection', (socket) => {
  console.log('a user connected');

  socket.on('disconnect', () => {
    console.log('a user disconnected');
  });
});

