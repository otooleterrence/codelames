import React from 'react';
import { useSelector } from 'react-redux';
import { selectTeamLeaders } from '../gameSetup/gameSlice';

export default function PlayerSetup() {
  const leaders = useSelector(selectTeamLeaders);
  return (
    <div>
      <h2>
        Leaders
      </h2>
      <ul>
        {
          leaders.map(leader => <li key={leader.name}>{leader.name}</li>)
        }
      </ul>
    </div>
  );
}
