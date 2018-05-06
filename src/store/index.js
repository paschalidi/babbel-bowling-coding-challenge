import { combineReducers } from 'redux';

import data from './app-store/data';
import { reducer } from './app-store';


const rootReducer = combineReducers({
  data,
  reducer
});

export default rootReducer;