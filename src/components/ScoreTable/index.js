/**
 *
 * ScoreTable
 *
 */
/* eslint-disable import/first */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prop-types */

import React, { Fragment } from 'react';
import { Grid } from 'semantic-ui-react';
import { LAST_ROUND } from '../../utils/constants';

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
                  parseInt(index) !== LAST_ROUND
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

export default ScoreTable;
