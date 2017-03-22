import React from 'react';
import GameListEntry from './GameListEntry.jsx';

const GameList = (props) => (
  <ul id="GameList">
    {props.games.map( (game) => <GameListEntry name={game.gameName} key={game._id} info={game} />)}
  </ul>
)


export default GameList;