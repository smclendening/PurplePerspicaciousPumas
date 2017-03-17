var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/greenfield');
var Schema = mongoose.Schema;

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
	username: {type: String, unique: true }
});

module.exports.gameInstanceModel = mongoose.model('gameInstanceModel', gameInstanceSchema);
module.exports.userModel = mongoose.model('userModel', userSchema);