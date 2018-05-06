/**
 *
 * InitialGamePanel
 *
 */
/* eslint-disable import/first */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prop-types */

import React from 'react';
import { Grid, Button } from 'semantic-ui-react';
import { connect } from 'react-redux';
import * as actions from '../../store/bowling-store/actions';


class InitialGamePanel extends React.Component { // eslint-disable-line react/prefer-stateless-function

  render() {
    return (
      <div className='flex panel background-color-black'>
        <Grid container centered>
          <Grid.Row style={{ paddingBottom: '5vw' }}>
            <div className='glowing-text text-lg'>Welcome to Babbel Bowling!</div>
          </Grid.Row>
          <Grid.Row>
            <Button inverted color='purple' onClick={() => this.props.initGame()}>New Game</Button>
          </Grid.Row>
          <Grid.Row>
            <a
              href='https://www.thoughtco.com/bowling-scoring-420895'
              target='_blank'
              rel='noopener noreferrer'
            >
              <Button inverted color='purple'>Rules</Button>
            </a>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

export default connect(null, actions)(InitialGamePanel);
