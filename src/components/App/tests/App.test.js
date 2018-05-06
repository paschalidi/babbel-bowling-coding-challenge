import React from 'react';
import { Provider } from 'react-redux';
import App from '../App';
import renderer from 'react-test-renderer';

import Store from '../../../store/configure';
const StoreInstance = Store();

test('App renders', () => {
  const component = renderer.create(
    <Provider store={StoreInstance}>
      <App />
    </Provider>
  );
  let tree;

  tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
