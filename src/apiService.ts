import apiClient from "./apiClient.ts";

function createGame() {
  return apiClient.post("/game");
}

export default { createGame };
