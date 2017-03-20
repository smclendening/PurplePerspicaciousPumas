var mongoose = require('mongoose');
var bcrypt = require('bcrypt');
mongoose.connect('mongodb://localhost/greenfield');
var Schema = mongoose.Schema;

var db = mongoose.connection;

db.on('error', function(error) {
  console.log('mongoose connection error', error);
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
  hash: String,
  email: {type: String, unique: true},
  attempts: {type: Number, default: 0}
});

userSchema.pre('save', function(next) {
  this.email = this.email.toLowerCase();
  var password = this.password || '';
  delete this.password;
  if (!this.hash) {
    // assuming there is no hash yet, set the hash
    this.hash = bcrypt.hashSync(password, 10);
  }
  return next();
});

userSchema.methods.public = function() {
  delete this.hash;
  return this;
};

userSchema.methods.authenticate = function(password) {
  if (bcrypt.compareSync(password, this.hash) && this.attempts < 20) {
    this.attempts = 0;
    this.save();
    delete this.hash;
    return this;
  } else {
    this.attempts++;
    this.save();
    return false;
  }
}

var User = mongoose.model('userModel', userSchema);




module.exports.gameInstanceModel = mongoose.model('gameInstanceModel', gameInstanceSchema);
module.exports.userModel = User;