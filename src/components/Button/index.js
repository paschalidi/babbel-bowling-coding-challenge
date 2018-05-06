/**
 *
 * Button
 *
 */
/* eslint-disable import/first */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prop-types */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/app-store/actions';


class Button extends Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    console.log(this.props);
    return (
      <button onClick={() => this.props.testFunction()}>HELLO</button>
    );
  }
}

function mapStateToProps(state) {
  const { data } = state;
  return { data };
}

export default connect(mapStateToProps, actions)(Button);
