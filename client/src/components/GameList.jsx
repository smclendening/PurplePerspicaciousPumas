import React from 'react';
import GameListEntry from './GameListEntry.jsx';

const GameList = (props) => (
  <ul id="GameList">
    {props.games.map( (game) => <Game name={game.name} />)}
  </ul>
)


export default GameList;