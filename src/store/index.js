import { combineReducers } from 'redux';

import data from './game-store/data/pins';
import { reducer } from './game-store';


const rootReducer = combineReducers({  game: reducer });

export default rootReducer;