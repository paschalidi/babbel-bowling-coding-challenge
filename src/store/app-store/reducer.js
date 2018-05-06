import * as t from './actionTypes';


export const reducer = (state = {}, { type, payload }) => {
  switch (type) {
    case t.TEST_ACTION:
      return payload;
  }
  return state;
};