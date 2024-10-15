import "./Game.css";
import Chessboard from "./Chessboard.tsx";
import { useLocation, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import GameDto from "./dto/GameDto.ts";
import apiService from "./apiService.ts";

function Game() {

  const {id} = useParams();
  const {state} = useLocation();
  const [game, setGame] = useState<GameDto>(state);

  async function fetchGame() {
    const response = await apiService.getGame(id!);
    setGame(response.data);
  }

  useEffect(() => {
    if (!game) {
      fetchGame();
    }
  }, []);

  if (game) {
    return (
      <div className="chessboard">
        <Chessboard pieces={game.arrangements[0].pieces} />
      </div>
    );
  } else {
    return <h2>Loading {id}</h2>;
  }
}

export default Game;
