import { createStore } from 'redux';
import rootReducer from './index';


export default (initialState) => {
  return createStore(rootReducer, initialState);
};