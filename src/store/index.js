import { combineReducers } from 'redux';
import { reducer } from './game-store';


const rootReducer = combineReducers({  game: reducer });

export default rootReducer;