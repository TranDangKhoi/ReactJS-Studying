import React from "react";
import Cells from "./Cells";

const Board = ({ cells, onClick }) => {
  return (
    <div className="game-board">
      {cells.map((item, index) => (
        <Cells
          children={item}
          className={item === "X" ? "x-xmark" : "o-mark"}
          onClick={() => onClick(index)}
        ></Cells>
      ))}
    </div>
  );
};

export default Board;
