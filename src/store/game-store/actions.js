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

export const updateScoreOfPlayer = (numberScored, rolls) => ({
  type: t.UPDATE_SCORE_OF_PLAYER,
  payload: { numberScored, rolls }
});

export const updateTotalScoreOfPlayer = (numberScored) => ({
  type: t.UPDATE_TOTAL_SCORE_OF_PLAYER,
  payload: { numberScored }
});

export const changeActivePlayerId = () => ({
  type: t.CHANGE_ACTIVE_PLAYER_ID
});

export const setStrike = () => ({
  type: t.SET_STRIKE,

});

export const setSpare = () => ({
  type: t.SET_SPARE
});

export const reduceBonusRounds = () => ({
  type: t.REDUCE_BONUS_ROUNDS
});
