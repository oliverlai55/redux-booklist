export function selectBook(book) {
  // selectBook is an ActionCreator, it needs to return an action, an Object with a type property.
  return {
    type: 'BOOK_SELECTED',
    payload: book
  };
}


// Action Creator is a function that returns an action
//Payload describes the condition of action being triggered
