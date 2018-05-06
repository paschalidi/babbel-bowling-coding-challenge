import React from 'react';
import renderer from 'react-test-renderer';
import BowlingGamePanel from '../index';
import { Provider } from 'react-redux';

import Store from '../../../store/configure';
const StoreInstance = Store();

test('BowlingGamePanel renders', () => {
  const component = renderer.create(
    <Provider store={StoreInstance}>
      <BowlingGamePanel />
    </Provider>
  );
  let tree;

  tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
