import * as t from './actionTypes';


export const testFunction = () => ({
  type: t.TEST_ACTION,
  payload: { input: 'TEST' }
});