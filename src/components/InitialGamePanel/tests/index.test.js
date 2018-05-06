import React from 'react';
import ReactDOM from 'react-dom';
import InitialGamePanel from 'index';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render('<InitialGamePanel />', div);
  ReactDOM.unmountComponentAtNode(div);
});
