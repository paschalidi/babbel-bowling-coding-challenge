import { combineReducers } from 'redux';

import data from './app-store/data';
import { reducer } from './app-store';


const rootReducer = combineReducers({ data, game: reducer });

export default rootReducer;