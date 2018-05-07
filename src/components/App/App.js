import React from 'react';
import PT from 'prop-types';
import { connect } from 'react-redux';
import InitialGamePanel from '../InitialGamePanel';
import PlayerSelectionPanel from '../PlayerSelectionPanel';
import BowlingGamePanel from '../BowlingGamePanel';
import GameOverPanel from '../GameOverPanel';
import { LAST_ROUND } from '../../utils/constants';


class App extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    if (this.props.show === 'InitialGamePanel')
      return <InitialGamePanel />;

    if (this.props.show === 'PlayerSelectionPanel')
      return <PlayerSelectionPanel />;

    if (this.props.gameRound === LAST_ROUND + 1)
      return <GameOverPanel />;

    return (
      <BowlingGamePanel />
    );
  }
}

function mapStateToProps(state) {
  return { ...state.game };
}

App.defaultProps = {
  show: 'InitialGamePanel',
  gameRound: 0,
};

App.ScoreTable = {
  show: PT.string,
  gameRound: PT.number,
};

export default connect(mapStateToProps)(App);
