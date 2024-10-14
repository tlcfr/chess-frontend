import "./App.css";
import Chessboard from "./Chessboard";
import { useState } from "react";
import GameDto from "./dto/GameDto.ts";
import apiService from "./apiService.ts";

function App() {

  const [game, setGame] = useState<GameDto>();

  async function handleCreateGame() {
    const response = await apiService.createGame();
    setGame(response.data);
  }

  return (
    <>
      {game
        ? (
          <div className="chessboard">
            <Chessboard pieces={game.arrangements[0].pieces} />
          </div>
        )
        : <button onClick={handleCreateGame}>Create game</button>
      }
    </>
  );
}

export default App;
