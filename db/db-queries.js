var models = require('./index.js');
var games = models.db.collection('gameinstancemodels');

module.exports.retrieveGameInstance = function(gameName) {

  return games.findOne({gameName: gameName});
};

module.exports.AddPlayerToGameInstance = function(players) {

  return games.update({gameName: gameName}, {players: players});
};

