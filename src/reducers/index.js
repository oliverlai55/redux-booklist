import { combineReducers } from 'redux';
import BooksReducer from './reducer';

const rootReducer = combineReducers({
  books: BooksReducer
});

export default rootReducer;

// reducer is a function that returns an application state
// the function returns a value of state
// contains 'keys' the value of the keys contains the state

//books: single piece of state
