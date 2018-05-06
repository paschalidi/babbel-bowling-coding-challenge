import React from 'react';
import { connect } from 'react-redux';
import InitialGamePanel from '../InitialGamePanel';


class App extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    if (this.props.show === 'InitialGamePanel')
      return <InitialGamePanel />;
  }
}

function mapStateToProps(state) {
  return { ...state.game };
}

export default connect(mapStateToProps)(App);
