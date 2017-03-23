var express = require('express');
var bodyParser = require('body-parser');
var models = require('../db/index.js');
var mongoose = require('mongoose');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var cookieParser = require('cookie-parser');
var session = require('express-session');
var User = models.userModel;
var Game = models.gameInstanceModel;

var app = express();
var port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(cookieParser());
app.use(session({
  resave: false,
  saveUninitialized: false,
  secret: 'orange-to-orange'
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(express.static(__dirname + '/../client/dist'));

// passport config
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// mongoose.connect('mongodb://localhost/passport_local_mongoose_express4');

app.post('/signup', function (req, res) {
  User.register(new User({username: req.body.username, email: req.body.email}), req.body.password, function (err, user) {
    if (err) {
      console.log(err);
      return res.status(400).send(err);
    } 

    passport.authenticate('local')(req, res, function() {
      console.log('success', user);
      res.status(201).send('created');
    })
  });
})

app.post('/login', passport.authenticate('local'), function(req, res) {
  console.log('in login request');
  res.status(201).send('success')
})

app.get('/test', passport.authenticate('local'), function(req, res) {
  res.status(200).send('success')
})

app.get('/games', function(req, res) {
  var promise = Game.find({}).exec();

  promise.then(function(games) {
    res.json(games);
  })
});

app.get('/game', function(req, res) {
  var name = req.query.name;
  var promise = Game.find({gameName: name}).exec();

  promise.then(function(game) {
    res.json(game);
  })
});

app.get('/username', function(req, res) {
  var user = req.session.passport.user;
  res.status(200).send(user);
});


var server = app.listen(port, function() {
  console.log('App is listening on port: ', port);
});

var io = require('socket.io')(server);

io.on('connection', (socket) => {
  console.log('a user connected to the socket');

  socket.on('join game', function(data) {
    // data needs to be gamename and username
    console.log('client joining room: ', data);
    socket.join(data.gameName);
    // add client to game DB if they're not already in players list
    // then, check num of players in players list
      // if it's 4 and gameStage is waiting 
        // update gameStage in db from waiting to playing
        // emit 'start game' event and send the game instance obj
  })

  //TODO: write a helper function that retrieves a game instance obj given a name
  // TODO: also write a helper for updating the game instance obj

  // on 'submit response'
    // first, grab game instance obj
    // then check that username does not exist as index[1] of a response in responses array
      // if username doesn't exist yet, then add response to DB

    // check if there are 3 responses
      // if there are 3 responses go to current Round in round array and increment stage by 1
      // retrieve updated game from DB
      // emit 'start judging' with game instance obj as data

  // on 'judge selection'
    // update game instance obj
      // at currentRounds in rounds array, set winner to be the username (given as data)
      // in same round, increment stage by 1 
      // if currentRound is less than 3
        // emit 'winner chosen' event with game instance obj as data
      // otherwise
        // emit 'game over' event with game instance obj

  // on 'ready to move on', 
    // retreive game instance obj
    // check if rounds at current round ready already contains that username
      // if not, add it to ready array 
      // if there are now 4 ready, increment currentRound by 1 
      // emit 'start next round' with game instance obj


  socket.on('disconnect', () => {
    console.log('a user disconnected');
  });
});

