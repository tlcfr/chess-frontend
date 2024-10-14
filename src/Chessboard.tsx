import "./Chessboard.css";
import board from "/board.svg";
import React, { useState } from "react";
import PieceDto from "./dto/PieceDto.ts";
import classNames from "classnames";

function Chessboard({pieces}: { pieces: PieceDto[] }) {

  const [selected, setSelected] = useState<number>();

  function handleSquareClick(index: number) {
    if (index === selected) {
      setSelected(undefined);
    } else if (pieces[index]) {
      setSelected(index);
    } else {
      setSelected(undefined);
    }
  }

  function buildSquares(): React.JSX.Element[] {
    const ranks = [] as React.JSX.Element[];
    for (let rankIndex = 0; rankIndex < 8; rankIndex++) {
      const rank = [] as React.JSX.Element[];
      for (let fileIndex = 0; fileIndex < 8; fileIndex++) {
        const index = rankIndex * 8 + fileIndex;
        const squareStyles = classNames("square", {
          selected: index === selected,
        });
        rank.push(
          <div className={squareStyles} key={index} onClick={() => handleSquareClick(index)}>
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
