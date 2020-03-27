// import React, { useState } from 'react';
import React from 'react';
import { useSelector } from 'react-redux';
import { createUseStyles } from 'react-jss';
import {
  selectRedTeam,
  selectBlueTeam,
} from '../gameSetup/gameSlice';

const useStyles = createUseStyles({
  teamContainer: props => ({
    display: 'flex',
    height: '100%',
    width: '150px',
    flexDirection: 'column',
    color: props.color,
    border: `1px solid ${props.color}`,
  }),
  boardContainer: {
    display: 'flex',
    width: '100%',
    flexGrow: 1,
    justifyContent: 'space-between',
  },
});

  export default function PlayerList(props) {
    const { color } = props;
    const classes = useStyles(props);
    const teamSelector = color === 'red' ? selectRedTeam : selectBlueTeam;
    const players = useSelector(teamSelector);
  return (
    <div className={classes.teamContainer}>
      <span>Team {color}:</span>
      <ul>
        {players.map(player => <li key={player.name}>{player.name}</li>)}
      </ul>
    </div>
  )
}
