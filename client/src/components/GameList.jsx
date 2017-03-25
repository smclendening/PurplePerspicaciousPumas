import React from 'react';
import GameListEntry from './GameListEntry.jsx';

const GameList = (props) => {
	let openGames = [];
  props.games.map((game) => {if(game.gameStage === 'waiting'){ openGames.push(game)}});
	return 	(
	  <ul id="GameList">
	    {openGames.map( (game) => <GameListEntry sendToGame={props.sendToGame} name={game.gameName} key={game._id} gameInfo={game} />)}
	  </ul>
	)
}


export default GameList;