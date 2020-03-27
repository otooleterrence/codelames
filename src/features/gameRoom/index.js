import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from "react-router-dom";
import { createUseStyles } from 'react-jss';
import { selectIsGameActive } from '../gameSetup/gameSlice';
import GameBoard from '../gameBoard';
import PlayerList from '../playerList';
import PlayerSetup from './PlayerSetup';
import Leaders from './Leaders';

const useStyles = createUseStyles({
  roomContainer: {
    display: 'flex',
    height: '100%',
    width: '100%',
    flexDirection: 'column',
  },
  boardContainer: {
    display: 'flex',
    width: '100%',
    flexGrow: 1,
    justifyContent: 'space-between'
  },
});

export default function GameRoom() {
  const classes = useStyles();
  const { roomId } = useParams();
  const isGameActive = useSelector(selectIsGameActive);

  return (
    <div className={classes.roomContainer}>
      <h2>
        Game Room: {roomId}
      </h2>
      <div className={classes.boardContainer}>
        <PlayerList color="red" />
        {
          isGameActive
          ? (<GameBoard />)
          : (<PlayerSetup />)
        }
        <PlayerList color="blue" />
      </div>
      <Leaders />
    </div>
  );
}
