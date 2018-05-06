import React from 'react';
import ReactDOM from 'react-dom';
import PlayerSelectionPanel from 'index';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render('<PlayerSelectionPanel />', div);
  ReactDOM.unmountComponentAtNode(div);
});
