import { reducer } from '../index';
import * as t from '../actionTypes';


export const SCORES = {
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
  players: {
    0: {
      id: 0, name: `Player 1`, bonusRounds: 0, totalScore: 0, scores: SCORES
    }
  },
  indexOfActivePlayer: 0,
  gameRound: 0,
  show: 'InitialGamePanel'
};

export const mockPlayersData = {
  0: { id: 0, name: `Player 1`, bonusRounds: 0, totalScore: 0, scores: SCORES },
  1: { id: 1, name: `Player 2`, bonusRounds: 0, totalScore: 0, scores: SCORES },
  2: { id: 2, name: `Player 3`, bonusRounds: 0, totalScore: 0, scores: SCORES }
};

describe('app reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(INITIAL_STATE);
  });

  it('should handle RESET_GAME', () => {
    expect(
      reducer({}, {
        type: t.RESET_GAME
      })
    ).toEqual(INITIAL_STATE);
  });

  it('should handle START_GAME', () => {
    expect(
      reducer({}, {
        type: t.START_GAME
      })
    ).toEqual({ show: 'BowlingGamePanel' });
  });

  it('should handle SET_AMOUNT_OF_PLAYERS', () => {
    expect(
      reducer({}, {
        type: t.SET_AMOUNT_OF_PLAYERS,
        payload: { amount: 1 }
      })
    ).toEqual({
      amountOfPlayers: 1,
      players: [{
        id: 1,
        name: `Player ${1}`,
        bonusRounds: 0,
        totalScore: 0,
        scores: SCORES
      }]
    });
  });

  it('should handle SET_AMOUNT_OF_PLAYERS', () => {
    expect(
      reducer({}, {
        type: t.SET_AMOUNT_OF_PLAYERS,
        payload: { amount: 4 }
      })
    ).toEqual({
      amountOfPlayers: 4,
      players: [
        {
          id: 1,
          name: `Player ${1}`,
          bonusRounds: 0,
          totalScore: 0,
          scores: SCORES
        },
        {
          id: 2,
          name: `Player ${2}`,
          bonusRounds: 0,
          totalScore: 0,
          scores: SCORES
        },
        {
          id: 3,
          name: `Player ${3}`,
          bonusRounds: 0,
          totalScore: 0,
          scores: SCORES
        },
        {
          id: 4,
          name: `Player ${4}`,
          bonusRounds: 0,
          totalScore: 0,
          scores: SCORES
        }
      ]
    });
  });

  it('should handle SET_PLAYER_NAME', () => {
    expect(
      reducer({}, {
        type: t.SET_PLAYER_NAME,
        payload: { players: mockPlayersData, id: 2, name: 'randomThisIs' }
      })
    ).toEqual({ players: { 2: { name: 'randomThisIs' } } });
  });

  it('should handle UPDATE_SCORE_OF_PLAYER', () => {
    expect(
      reducer(INITIAL_STATE, {
        type: t.UPDATE_SCORE_OF_PLAYER,
        payload: { numberScored: 10, rolls: 1 }
      })
    ).toEqual({
      players: {
        0: {
          id: 0,
          name: `Player 1`,
          bonusRounds: 0,
          totalScore: 0,
          scores: {
            0: { 0: null, 1: 10 },
            1: { 0: null, 1: null },
            2: { 0: null, 1: null },
            3: { 0: null, 1: null },
            4: { 0: null, 1: null },
            5: { 0: null, 1: null },
            6: { 0: null, 1: null },
            7: { 0: null, 1: null },
            8: { 0: null, 1: null },
            9: { 0: null, 1: null, 2: null }
          }
        }
      },
      indexOfActivePlayer: 0,
      gameRound: 0,
      show: 'InitialGamePanel'
    });
  });

  it('should handle UPDATE_TOTAL_SCORE_OF_PLAYER', () => {
    expect(
      reducer(INITIAL_STATE, {
        type: t.UPDATE_TOTAL_SCORE_OF_PLAYER,
        payload: { numberScored: 2 }
      })
    ).toEqual({
      players: {
        0: {
          id: 0,
          name: `Player 1`,
          bonusRounds: 0,
          totalScore: 2,
          scores: {
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
          }
        }
      },
      indexOfActivePlayer: 0,
      gameRound: 0,
      show: 'InitialGamePanel'
    });
  });

  it('should handle CHANGE_ACTIVE_PLAYER_ID', () => {
    expect(
      reducer(INITIAL_STATE, {
        type: t.CHANGE_ACTIVE_PLAYER_ID
      })
    ).toEqual({
      players: {
        0: {
          id: 0,
          name: `Player 1`,
          bonusRounds: 0,
          totalScore: 0,
          scores: {
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
          }
        }
      },
      indexOfActivePlayer: 0,
      gameRound: 1,
      show: 'InitialGamePanel'
    });
  });

  it('should handle SET_STRIKE', () => {
    expect(
      reducer(INITIAL_STATE, {
        type: t.SET_STRIKE,
        payload: { rounds: 5 }

      })
    ).toEqual({
      players: {
        0: {
          id: 0,
          name: `Player 1`,
          bonusRounds: 2,
          totalScore: 0,
          scores: {
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
          }
        }
      },
      indexOfActivePlayer: 0,
      gameRound: 0,
      show: 'InitialGamePanel'
    });
  });

  it('should handle SET_SPARE', () => {
    expect(
      reducer(INITIAL_STATE, {
        type: t.SET_SPARE
      })
    ).toEqual({
      players: {
        0: {
          id: 0,
          name: `Player 1`,
          bonusRounds: 1,
          totalScore: 0,
          scores: {
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
          }
        }
      },
      indexOfActivePlayer: 0,
      gameRound: 0,
      show: 'InitialGamePanel'
    });
  });

  it('should handle REDUCE_BONUS_ROUNDS', () => {
    expect(
      reducer(INITIAL_STATE, {
        type: t.REDUCE_BONUS_ROUNDS
      })
    ).toEqual({
      players: {
        0: {
          id: 0,
          name: `Player 1`,
          bonusRounds: -1,
          totalScore: 0,
          scores: {
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
          }
        }
      },
      indexOfActivePlayer: 0,
      gameRound: 0,
      show: 'InitialGamePanel'
    });
  });

});