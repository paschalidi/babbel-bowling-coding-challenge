/**
 *
 * ScoreTable
 *
 */
/* eslint-disable import/first */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prop-types */

import React, { Fragment } from 'react';
import PT from 'prop-types';
import { Grid } from 'semantic-ui-react';
import { LAST_ROUND } from '../../utils/constants';
// eslint-disable-next-line
import styles from './styles.css';


const ScoreTable = ({ indexOfActivePlayer, players }) =>
  <Grid.Row columns={11}>
    {
      Object.keys(players[indexOfActivePlayer].scores).map(index => {
          const score = players[indexOfActivePlayer].scores[index];
          return (
            <Grid.Column key={index}>
              <table className='border'>
                <tbody>
                {
                  parseInt(index, 10) !== LAST_ROUND
                    ?
                    <Fragment>
                      <tr>
                        <th>{score[0]}</th>
                        <th className='border'>{score[1]}</th>
                      </tr>
                      <tr>
                        <th />
                        <th>{score[0] + score[1]}</th>
                      </tr>
                    </Fragment>
                    :
                    <Fragment>
                      <tr>
                        <th>{score[0]}</th>
                        <th className='border'>{score[1]}</th>
                        <th className='border'>{score[2]}</th>
                      </tr>
                      <tr>
                        <th />
                        <th>{score[0] + score[1] + score[2]}</th>
                      </tr>
                    </Fragment>
                }
                </tbody>
              </table>
            </Grid.Column>);
        }
      )
    }
  </Grid.Row>;

ScoreTable.defaultProps = {
  indexOfActivePlayer: 0,
  players: {
    0: {
      id: 0, name: `Player 1`, bonusRounds: 0, totalScore: 0, scores: {
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
  }
};
ScoreTable.ScoreTable = {
  indexOfActivePlayer: PT.number.isRequired,
  players: PT.object.isRequired
};

export default ScoreTable;
