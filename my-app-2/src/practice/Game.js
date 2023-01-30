import React, { useState } from "react";
import { winnerCalculate } from "../helper";
import Board from "./Board";

const Game = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true); // true thì sẽ đánh X, false sẽ đánh O
  const winner = winnerCalculate(board);
  const handleClick = (index) => {
    if (xIsNext === true) {
    }
  };
  return (
    <div>
      <Board cells={board} onClick={handleClick}></Board>
    </div>
  );
};

export default Game;
