/**
 *
 * GameOverPanel
 *
 */
/* eslint-disable import/first */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prop-types */

import React from 'react';
import { Grid, Button } from 'semantic-ui-react';
import { connect } from 'react-redux';
import * as actions from '../../store/game-store/actions';
import * as R from 'ramda';


class GameOverPanel extends React.Component { // eslint-disable-line react/prefer-stateless-function
  getIndexOfWinner = () => {
    const array = Object.keys(this.props.players).map((index) => this.props.players[index].totalScore);
    return R.indexOf(Math.max.apply(Math, array), array);
  };

  render() {
    const winner = this.props.players[this.getIndexOfWinner()];
    return (
      <div className='flex panel background-color-black'>
        <Grid container centered stackable>
          <Grid.Row style={{ paddingBottom: '5vw' }}>
            <div className='glowing-text text-lg'>Game Over</div>
          </Grid.Row>

          <Grid.Row>
            <div className='glowing-text text-md'>The Winner Is {winner.name}</div>
          </Grid.Row>

          <Grid.Row style={{ paddingBottom: '5vw' }}>
            <div className='glowing-text text-md'>With Total Score {winner.totalScore}</div>
          </Grid.Row>


          <Grid.Row>
            <div className='glowing-text text-sm'>scores</div>
          </Grid.Row>
          <Grid.Row style={{ paddingBottom: '5vw' }} columns={this.props.amountOfPlayers}>
            {
              Object.keys(this.props.players).map(index =>
                <Grid.Column key={index} textAlign='center'>
                  <div className='glowing-text text-sm'>{this.props.players[index].name}
                    <br /> {this.props.players[index].totalScore}
                  </div>
                </Grid.Column>
              )
            }
          </Grid.Row>
          <Grid.Row>
            <Button
              inverted
              color='purple'
              onClick={() => this.props.resetGame()}
            >Start a New Game</Button>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { ...state.game };
}

export default connect(mapStateToProps, actions)(GameOverPanel);
