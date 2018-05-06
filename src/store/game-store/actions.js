import * as t from './actionTypes';


export const initGame = () => ({
  type: t.INIT_GAME
});

export const resetGame = () => ({
  type: t.RESET_GAME
});

export const startGame = () => ({
  type: t.START_GAME
});

export const setAmountOfPlayers = (amount) => ({
  type: t.SET_AMOUNT_OF_PLAYERS,
  payload: { amount }
});

export const setPlayerName = (players, id, name) => ({
  type: t.SET_PLAYER_NAME,
  payload: { players, id, name }
});
