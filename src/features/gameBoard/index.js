import React from 'react';
import { useParams } from "react-router-dom";

export default function GameBoard() {
  const { roomId } = useParams();

  return (
    <div>
      <h2>
        Game Room: {roomId}
      </h2>
    </div>
  );
}
