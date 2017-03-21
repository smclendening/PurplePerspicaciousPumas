var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/orange-to-orange');
var Schema = mongoose.Schema;
var passportLocalMongoose = require('passport-local-mongoose');

var db = mongoose.connection;

db.on('error', function() {
  console.log('mongoose connection error');
});

db.once('open', function() {
  console.log('mongoose connected successfully');
});

var gameInstanceSchema = new Schema({
  id: Number,
  gameName: String,
  password: String,
  players: Array, 
  rounds: Array, 
  currentRound: Number
});

var userSchema = new Schema({
	username: {type: String, unique: true },
	password: String,
	email: String,
});

userSchema.plugin(passportLocalMongoose);

module.exports.gameInstanceModel = mongoose.model('gameInstanceModel', gameInstanceSchema);
module.exports.userModel = mongoose.model('userModel', userSchema);