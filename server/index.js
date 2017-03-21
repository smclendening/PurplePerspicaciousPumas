var express = require('express');
var bodyParser = require('body-parser');
var models = require('../db/index.js');
var mongoose = require('mongoose');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var cookieParser = require('cookie-parser');
var session = require('express-session');


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
var User = models.userModel;
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
  res.status(201).send('success')
})

app.get('/test', passport.authenticate('local'), function(req, res) {
  res.status(200).send('success')
})
// app.post('/users', function (req, res) {
//   var username = req.body.username;
//   var user = new models.userModel({
//   	username: username
//   });
//   user.save(function(err) {
//   	if (err) {
//   		res.status(400).send('username exists')
//   	} else {
//   		res.status(201).send('success')
//   	}
//   })

// });

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

