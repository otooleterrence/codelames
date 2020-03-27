import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from "react-router-dom";
import { selectIsGameActive } from '../gameSetup/gameSlice';
import GameBoard from '../gameBoard';
import PlayerList from '../playerList';
import PlayerSetup from './PlayerSetup';

export default function GameRoom() {
  const { roomId } = useParams();
  const isGameActive = useSelector(selectIsGameActive);

  return (
    <div>
      <h2>
        Game Room: {roomId}
      </h2>
      <PlayerList color="red" />
      {
        isGameActive ?
        (<GameBoard />)
        :
        (<PlayerSetup />)
      }
      <PlayerList color="blue" />
    </div>
  );
}
