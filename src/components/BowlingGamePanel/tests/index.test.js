import React from 'react';
import ReactDOM from 'react-dom';
import BowlingGamePanel from 'index';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render('<BowlingGamePanel />', div);
  ReactDOM.unmountComponentAtNode(div);
});
