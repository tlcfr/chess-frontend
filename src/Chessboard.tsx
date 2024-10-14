import "./Chessboard.css";
import board from "/board.svg";
import React from "react";
import PieceDto from "./dto/PieceDto.ts";

function Chessboard({pieces}: { pieces: PieceDto[] }) {

  function handleSquareClick(index: number) {
    console.log("Clicked square with index:", index);
  }

  function buildSquares(): React.JSX.Element[] {
    const ranks = [] as React.JSX.Element[];
    for (let rankIndex = 0; rankIndex < 8; rankIndex++) {
      const rank = [] as React.JSX.Element[];
      for (let fileIndex = 0; fileIndex < 8; fileIndex++) {
        const index = rankIndex * 8 + fileIndex;
        rank.push(
          <div className="square" key={index} onClick={() => handleSquareClick(index)}>
            <img src={`/piece/${pieces[index]?.shortName}.svg`} alt="" />
          </div>,
        );
      }
      ranks.push(
        <div className="square-rank" key={rankIndex}>
          {rank}
        </div>,
      );
    }
    return ranks;
  }

  return (
    <div className="chessboard-container">
      <img src={board} alt="" draggable={false} />
      <div className="square-container">
        {buildSquares()}
      </div>
    </div>
  );
}

export default Chessboard;
