import apiClient from "./apiClient.ts";

function createGame() {
  return apiClient.post("/game");
}

function getGame(id: string) {
  return apiClient.get(`/game/${id}`);
}

export default {
  createGame,
  getGame,
};
