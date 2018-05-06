import React from 'react';
import renderer from 'react-test-renderer';
import InitialGamePanel from '../index';
import { Provider } from 'react-redux';

import Store from '../../../store/configure';
const StoreInstance = Store();

test('InitialGamePanel renders', () => {
  const component = renderer.create(
    <Provider store={StoreInstance}>
      <InitialGamePanel />
    </Provider>
  );
  let tree;

  tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
