import * as t from './actionTypes';


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
      let indexOfFocusedPlayer = G.getIndexFromId(state.players, payload.id);
      let path = R.lensPath(['players', [indexOfFocusedPlayer], 'name']);
      let name = payload.name;
      if (payload.name.length === 0)
        name = `Player ${payload.id}`;

      return R.set(path, name, state);

  }

  return state;
};