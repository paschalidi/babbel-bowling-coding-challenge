import * as t from './actionTypes';
import * as R from 'ramda';
import * as G from '../../utils/global';


export const scores = {
  0: { 0: null, 1: null },
  1: { 0: null, 1: null },
  2: { 0: null, 1: null },
  3: { 0: null, 1: null },
  4: { 0: null, 1: null },
  5: { 0: null, 1: null },
  6: { 0: null, 1: null },
  7: { 0: null, 1: null },
  8: { 0: null, 1: null },
  9: { 0: null, 1: null, 2: null }
};

export const INITIAL_STATE = {
  players: { 0: { id: 0, name: `Player 1`, bonusRounds: 0, totalScore: 0, scores } },
  indexOfActivePlayer: 0,
  gameRound: 0,
  show: 'InitialGamePanel'
};

export const reducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case t.INIT_GAME:
      return { ...state, show: 'PlayerSelectionPanel' };

    case t.RESET_GAME:
      return INITIAL_STATE;

    case t.START_GAME:
      return { ...state, show: 'BowlingGamePanel' };

    case t.SET_AMOUNT_OF_PLAYERS:
      let players = [...new Array(payload.amount)].map((index, i) => i + 1);
      return {
        ...state,
        amountOfPlayers: payload.amount,
        players: players.map(index => {
          return {
            id: index,
            name: `Player ${index}`,
            bonusRounds: 0,
            totalScore: 0,
            scores
          };
        })
      };

    case t.SET_PLAYER_NAME:
      let indexOfFocusedPlayer = G.getIndexFromId(payload.players, payload.id);
      let name = payload.name;
      if (payload.name.length === 0)
        name = `Player ${payload.id}`;
      return R.set(R.lensPath(['players', [indexOfFocusedPlayer], 'name']), name, state);

    case t.UPDATE_SCORE_OF_PLAYER:
      return R.set(R.lensPath(['players', [state.indexOfActivePlayer], 'scores', [state.gameRound], [payload.rolls]]), payload.numberScored, state);

    case t.UPDATE_TOTAL_SCORE_OF_PLAYER:
      const path = R.lensPath(['players', [state.indexOfActivePlayer], 'totalScore']);
      const currentTotalScore = R.view(path, state);
      return R.set(path, currentTotalScore + payload.numberScored, state);

    case t.CHANGE_ACTIVE_PLAYER_ID:
      if (state.players[R.inc(state.indexOfActivePlayer)])
        return {
          ...state,
          indexOfActivePlayer: G.getIndexFromId(state.players, state.players[R.inc(state.indexOfActivePlayer)].id)
        };
      return {
        ...state,
        indexOfActivePlayer: 0,
        gameRound: R.inc(state.gameRound)
      };

    case t.SET_STRIKE:
      return R.set(R.lensPath(['players', [state.indexOfActivePlayer], 'bonusRounds']), 2, state);

    case t.SET_SPARE:
      return R.set(R.lensPath(['players', [state.indexOfActivePlayer], 'bonusRounds']), 1, state);

    case t.REDUCE_BONUS_ROUNDS:
      const path2 = R.lensPath(['players', [state.indexOfActivePlayer], 'bonusRounds']);
      const bonus = R.view(path2, state);
      return R.set(path2, R.dec(bonus), state);
    default:
      return state;

  }
};