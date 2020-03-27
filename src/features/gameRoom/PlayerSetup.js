import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  updateNameAndTeam,
  setMeLeader,
  startGame,
} from '../gameSetup/gameSlice';

import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  setupContainer: {
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
  },
  boardContainer: {
    display: 'flex',
    width: '100%',
    flexGrow: 1,
    justifyContent: 'space-between'
  },
});

export default function PlayerSetup() {
  const classes = useStyles();
  const dispatch = useDispatch();

  const [nameInput, updateName] = useState('');

  const updatedPlayer = {
    name: nameInput,
  }

  return (
    <div className={classes.setupContainer}>
      <h2>
        Player Setup
      </h2>
      <span>my name:</span>
      <input
        value={nameInput}
        onChange={e => updateName(e.target.value)}
      ></input>
      <button
        onClick={() => dispatch(updateNameAndTeam({ ...updatedPlayer, team: 'red'}))}
      >
        go to red
      </button>
      <button
        onClick={() => dispatch(updateNameAndTeam({ ...updatedPlayer, team: 'blue'}))}
      >
        go to blue
      </button>
      <button
        onClick={() => dispatch(setMeLeader())}
      >
        I'm team leader
      </button>
      <button onClick={() => dispatch(startGame())}>Start Game</button>
    </div>
  );
}
