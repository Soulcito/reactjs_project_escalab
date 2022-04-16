import { combineReducers } from 'redux';
import { movieReducer } from './movieReducer';
import { uiReducer } from './uiReducer';

export const rootReducer = combineReducers({
  ui: uiReducer,
  movie: movieReducer
});