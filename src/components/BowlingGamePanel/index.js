/**
 *
 * BowlingGamePanel
 *
 */
/* eslint-disable import/first */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prop-types */

import React from 'react';
import { connect } from 'react-redux';
import PT from 'prop-types';
import * as R from 'ramda';
import * as actions from '../../store/game-store/actions';
import { Grid, Button } from 'semantic-ui-react';
import ScoreTable from '../ScoreTable';
import { DELAY, LAST_ROUND } from '../../utils/constants';


class BowlingGamePanel extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);

    this.state = {
      rolls: 1,
      rollsCounter: 0,
      totalScore: 0,
      isButtonDisabled: false
    };
  }

  randomScore = (max = 10 - this.state.totalScore) => {
    return Math.floor(Math.random() * (max + 1));
  };

  playerHasBonusRound = () => {
    const path = R.lensPath([[this.props.indexOfActivePlayer], 'bonusRounds']);
    return !!R.view(path, this.props.players);
  };

  handlePlayerChangeLogic = () => {
    this.props.changeActivePlayerId();
    this.setState({
      isButtonDisabled: false,
      isSpecialLastRound: false,
      rolls: 1,
      rollsCounter: 0,
      totalScore: 0
    });
  };

  handleThrowBall = () => {
    this.setState({ isButtonDisabled: true });

    let bonusPoints = 0;
    const numberScored = this.randomScore();
    const totalScore = this.state.totalScore + numberScored;
    if (this.playerHasBonusRound()) {
      bonusPoints = 10;
      this.props.reduceBonusRounds();
    }

    this.props.updateScoreOfPlayer(numberScored + bonusPoints, this.state.rollsCounter);
    this.props.updateTotalScoreOfPlayer(numberScored + bonusPoints);

    if (totalScore === 10 && this.props.gameRound !== LAST_ROUND) {
      if (this.state.rolls === 1)
        this.props.setStrike();
      else if (this.state.rolls === 0)
        this.props.setSpare();
      return setTimeout(this.handlePlayerChangeLogic, DELAY);
    }
    else if (totalScore === 10 && this.props.gameRound === LAST_ROUND && !this.state.isSpecialLastRound) {
      if (this.state.rolls === 1)
        this.props.setStrike();
      else if (this.state.rolls === 0)
        this.props.setSpare();
      return this.setState({
        isButtonDisabled: false,
        rollsCounter: R.inc(this.state.rollsCounter),
        isSpecialLastRound: true,
        totalScore
      });
    }

    if (!!this.state.rolls)
      return this.setState({
        isButtonDisabled: false,
        rollsCounter: R.inc(this.state.rollsCounter),
        rolls: R.dec(this.state.rolls), totalScore
      });
    else
      return setTimeout(this.handlePlayerChangeLogic, DELAY);
  };

  render() {
    const { players, indexOfActivePlayer, gameRound, amountOfPlayers } = this.props;
    return (
      <div className='flex panel background-color-black'>
        <Grid container centered stackable className='background-color-black'>
          <Grid.Row>
            <Grid.Column textAlign='center'>
              <div className='glowing-text text-lg'>Babbel Bowling</div>
            </Grid.Column>
          </Grid.Row>

          <Grid.Row>
            <Grid.Column textAlign='center'>
              <div className='glowing-text text-md'>ROUND - {gameRound} -</div>
            </Grid.Column>
          </Grid.Row>

          <Grid.Row columns={amountOfPlayers}>
            {
              Object.keys(players).map(index => {
                return (
                  <Grid.Column key={index} textAlign='center'>
                    <div className={`${indexOfActivePlayer === parseInt(index,10) ? 'glowing-text-active' : 'glowing-text-inactive'} text-md`}>
                      {players[index].name}
                    </div>
                    <div className={`${indexOfActivePlayer === parseInt(index,10) ? 'glowing-text-active' : 'glowing-text-inactive'} text-sm`}>
                      * {players[index].totalScore} *
                    </div>
                  </Grid.Column>);
              })
            }
          </Grid.Row>

          <ScoreTable indexOfActivePlayer={indexOfActivePlayer} players={players} />
          <Grid.Row columns='equal'>
            <Button
              disabled={this.state.isButtonDisabled}
              onClick={this.handleThrowBall}
              inverted
              color='purple'
            >Throw the ball</Button>
          </Grid.Row>
        </Grid>
      </div>

    );
  }
}

function mapStateToProps(state) {
  return {
    data: state.data, ...state.game
  };
}

BowlingGamePanel.ScoreTable = {
  amountOfPlayers: PT.number.isRequired,
  players: PT.object.isRequired,
  gameRound: PT.number.isRequired,
  indexOfActivePlayer: PT.number.isRequired
};

export default connect(mapStateToProps, actions)(BowlingGamePanel);