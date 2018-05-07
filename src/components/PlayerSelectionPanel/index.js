/**
 *
 * PlayerSelectionPanel
 *
 */
/* eslint-disable import/first */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prop-types */

import React, { Fragment } from 'react';
import PT from 'prop-types';
import { connect } from 'react-redux';
import * as actions from '../../store/game-store/actions';
import { Grid, Button, Input } from 'semantic-ui-react';


class PlayerSelectionPanel extends React.Component { // eslint-disable-line react/prefer-stateless-function

  render() {
    const { players } = this.props;
    return (
      <div className='flex panel background-color-black'>
        <Grid container centered stackable>
          <Grid.Row style={{ paddingBottom: '5vw' }}>
            <div className='glowing-text text-lg'>Select the amount of players</div>
          </Grid.Row>

          {
            this.props.amountOfPlayers
              ?
              <Fragment>
                {Object.keys(this.props.players).map(index =>
                  <Grid.Row key={index} columns={1}>
                    <Grid.Column width={6} textAlign='center'>
                      <Input
                        fluid
                        key={index}
                        onChange={(e) => this.props.setPlayerName(players, players[index].id, e.target.value)}
                        placeholder={this.props.players[index].name}
                      />
                    </Grid.Column>
                  </Grid.Row>)
                }
                <Grid.Row columns={1}>
                  <Grid.Column width={6} textAlign='center'>
                    <Button
                      fluid
                      inverted
                      color='purple'
                      onClick={() => this.props.startGame()}
                    >PLAY!</Button>
                  </Grid.Column>
                </Grid.Row>
              </Fragment>
              :
              <Grid.Row columns={4}>
                {
                  [1, 2, 3, 4].map(index =>
                    <Grid.Column key={index} width={2} textAlign='center'>
                      <Button
                        circular
                        inverted
                        color='purple'
                        onClick={() => this.props.setAmountOfPlayers(index)}
                      >{index}</Button>
                    </Grid.Column>
                  )
                }
              </Grid.Row>
          }
        </Grid>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { ...state.game };
}

PlayerSelectionPanel.ScoreTable = {
  players: PT.object.isRequired
};

export default connect(mapStateToProps, actions)(PlayerSelectionPanel);
