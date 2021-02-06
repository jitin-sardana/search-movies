import { combineReducers } from 'redux';
import searchMoviesReducer from './searchMoviesReducer';

const rootReducer = combineReducers({
  searchApp: searchMoviesReducer
})

export default rootReducer;