//state argument is NOT application state, only the state this reducer is responsible for
export default function(state, action) {
  switch(action.type) {
  case 'BOOK_SELECTED':
    return action.payload;
  }

  return state
}

//reducers get two arguments, state and action
