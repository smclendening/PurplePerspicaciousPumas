var models = require('./index.js');
var games = models.db.collection('gameinstancemodels');

module.exports.retrieveGameInstance = function(gameName) {

  return games.findOne({gameName: gameName});
};

module.exports.addPlayerToGameInstance = function(gameName, players) {

  return games.update({gameName: gameName}, {players: players});
};

module.exports.setGameInstanceGameStageToPlaying = function(gameName) {

  return games.update({gameName: gameName}, {gameStage: 'playing'});
};

module.exports.updateRounds = function(gameName, roundsArray) {

  return games.update({gameName: gameName}, {rounds: roundsArray});
}