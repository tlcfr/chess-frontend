import "./Game.css";
import Chessboard from "./Chessboard.tsx";
import { useLocation, useParams } from "react-router-dom";

function Game() {

  const {id} = useParams();
  const {state} = useLocation();

  if (state) {
    return (
      <div className="chessboard">
        <Chessboard pieces={state.arrangements[0].pieces} />
      </div>
    );
  } else {
    return <h2>Loading {id}</h2>;
  }
}

export default Game;
