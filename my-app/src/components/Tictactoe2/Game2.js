import React from "react";
import { useState } from "react";
import { winnerCalculate } from "../helper";
import Board from "./Board";
import "./GameStyle.css";

const Game = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const winner = winnerCalculate(board);
  const handleClick = (index) => {
    const boardCopy = [...board];
    if (winner !== null || boardCopy[index]) return;
    if (xIsNext) {
      boardCopy[index] = "X";
    } else {
      boardCopy[index] = "O";
    }
    setBoard(boardCopy);
    setXIsNext((xIsNext) => !xIsNext);
  };
  return (
    <div>
      <Board cells={board} onClick={handleClick}></Board>
      {winner ? `Winner is ${winner}` : ""}
    </div>
  );
};

export default Game;
