var express = require('express');
var app = express();
var port = process.env.PORT || 3000;
var bodyParser = require('body-parser');
var models = require('../db/index.js');
var User = models.userModel;
var mongoose = require('mongoose');
var passport = require('passport');
var session = require('express-session');
var redis = require('redis-url').connect();
var passportSocketIo = require('passport.socketio');
var cookieParser = require('cookie-parser');
var RedisStore = require('connect-redis')(session);
var sessionStore = new RedisStore({ client: redis});
var LocalStrategy = require('passport-local').Strategy;
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

// Grabbing name from user
passport.serializeUser(function(user, done){
  done(null, user.username);
});

passport.deserializeUser(function(username, done) {
  User.find({username: username}).exec().then(function(user){
    done(null, user.public());
  })
});

passport.use(new LocalStrategy(
  function(username, password, done) {
    User.findOne({username: username}, function (err, user) {
      if (err) {
        return done (err);
      } else if (user === null) {
        return done (null, false, {message: 'Incorrect username'});
      } else {
        console.log(user);
        if (user.authenticate(password)) {
          done (null, user.public());
        } else {
          setTimeout(function() {
            done(null, false, {message: 'Sorry, your password is incorrect'});
          }, 3000);
        }
      }
    });
  }
));

app.post('/signup', function (req, res ) {
  console.log(req.body);
  var username = req.body.username;
  User.findOne({username: username}).exec().then(function(user) {
    console.log('0', user);
    if (user !== null) {
      console.log('err');
      throw new Error('that username is taken');
    }
    console.log('.5');
    console.log('.7');
  }).then(function() {
    console.log('1');
    var user = new User(req.body);
    return user.save(function(err) {
    	if (err) {
        throw new Error('that email is taken');
    	} 
    })
  }).then(function() {
    console.log('2');
    req.logIn(req.body, function(err) {
      if (err) {
        throw new Error(err)
      } else {
        res.status(201).send({loggedin: true});
      }
    })
  }).catch(function(err) {
    res.status(400).send(err);
  })
})

app.post('/login', passport.authenticate('local'), function(req, res) {
  req.logIn(req.body, function(err) {
    if (err) {
      throw new Error(err)
    } else {
      res.status(201).send({loggedin: true});
    }
  })
});

app.use(express.static(__dirname + '/../client/dist'));

app.post('/users', function (req, res) {
  var username = req.body.username;
});



var server = app.listen(port, function() {
  console.log('App is listening on port: ', port);
});

var io = require('socket.io')(server);

io.use(passportSocketIo.authorize({
  secret: 'keyboard cat',
  store: sessionStore,
  passport: passport,
  cookieParser: cookieParser
}));

io.on('connection', (socket) => {
  console.log('a user connected');

  socket.on('disconnect', () => {
    console.log('a user disconnected');
  });
});

