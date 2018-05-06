import React from 'react';
import renderer from 'react-test-renderer';
import ScoreTable from '../index';


test('ScoreTable renders', () => {
  const component = renderer.create(
    <ScoreTable />
  );
  let tree;

  tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
