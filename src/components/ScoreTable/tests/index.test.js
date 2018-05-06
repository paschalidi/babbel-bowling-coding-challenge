import React from 'react';
import ReactDOM from 'react-dom';
import ScoreTable from 'index';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render('<ScoreTable />', div);
  ReactDOM.unmountComponentAtNode(div);
});
