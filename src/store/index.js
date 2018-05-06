import { combineReducers } from 'redux';

import data from './game-store/data';
import { reducer } from './game-store';


const rootReducer = combineReducers({ data, game: reducer });

export default rootReducer;