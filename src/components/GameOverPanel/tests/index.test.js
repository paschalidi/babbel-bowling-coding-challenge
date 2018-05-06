import React from 'react';
import renderer from 'react-test-renderer';
import GameOverPanel from '../index';
import { Provider } from 'react-redux';


import Store from '../../../store/configure';
const StoreInstance = Store();
test('GameOverPanel renders', () => {
  const component = renderer.create(
    <Provider store={StoreInstance}>
      <GameOverPanel />
    </Provider>
  );
  let tree;

  tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
