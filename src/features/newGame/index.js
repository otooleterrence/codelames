import React, { useState } from 'react';
import { useSelector } from 'react-redux';
// import { useSelector, useDispatch } from 'react-redux';
import { selectRoomName } from '../gameSetup/gameSlice';
import { Link } from "react-router-dom";

export default function Counter() {
  const name = useSelector(selectRoomName);
  // const dispatch = useDispatch();
  const [roomName, setRoomName] = useState(name);

  return (
    <div>
      <h2>
        code-lamess
      </h2>
      <span>room name:</span>
      <input
        value={roomName}
        onChange={e => setRoomName(e.target.value)}
      ></input>
      <Link to={`/${roomName}`}>go to room</Link>
      {/* <button onClick={dispatch(addNewRoom(roomName))}>go to room</button> */}
    </div>

  );
}
