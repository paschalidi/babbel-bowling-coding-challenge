import React from 'react';
import renderer from 'react-test-renderer';
import PlayerSelectionPanel from '../index';
import { Provider } from 'react-redux';

import Store from '../../../store/configure';
const StoreInstance = Store();

test('PlayerSelectionPanel renders', () => {
  const component = renderer.create(
    <Provider store={StoreInstance}>
      <PlayerSelectionPanel />
    </Provider>
  );
  let tree;

  tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
