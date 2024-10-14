import { useNavigate } from "react-router-dom";
import apiService from "./apiService.ts";
import GameDto from "./dto/GameDto.ts";

function Home() {

  const navigate = useNavigate();

  async function handleCreateGame() {
    const response = await apiService.createGame();
    const game = response.data as GameDto;
    navigate(`/game/${game.id}`, {state: game});
  }

  return <button onClick={handleCreateGame}>Create game</button>;
}

export default Home;
