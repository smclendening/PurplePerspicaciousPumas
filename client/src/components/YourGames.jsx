import React from 'react';
import GameListEntry from './GameListEntry.jsx';

const YourGames = (props) => {
	let yourGames = [];
  	props.games.map((game) => {if( (game.gameStage === 'waiting' || game.gameStage === 'playing') && game.players.includes(props.username)){ yourGames.push(game)}});
  	console.log(yourGames);
	return 	(
	  <ul id="YourGames">
	    {yourGames.map( (game) => <GameListEntry sendToGame={props.sendToGame} name={game.gameName} key={game._id} gameInfo={game} />)}
	  </ul>
	)
}


export default YourGames;