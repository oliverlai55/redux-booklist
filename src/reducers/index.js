import { combineReducers } from 'redux';
import BooksReducer from './reducer_books';
import ActiveBook from './reducer_active_book';

const rootReducer = combineReducers({
  books: BooksReducer,
  activeBook: ActiveBook
});

export default rootReducer;

// Reducer is a function that returns an application state
// the function returns a value of state
// contains 'keys' the value of the keys contains the state

//books: single piece of state
