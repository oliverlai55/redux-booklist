import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookList extends Component {
  renderList() {
    return this.props.books.map((book) => {
      return (
        <li key={book.title} className="list-group-item">{book.title}</li>
      );
    });
  }

  render() {
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    )
  }
}

function mapStateToProps(state) {
  //take App State as argument, returns an object that will show up as props inside of BookList.  The glue between React and Redux.
  return {

    books: state.books
  };
}

export default connect(mapStateToProps)(BookList)

//Connect takes in the function and the component, produces the container that can be passed down

//Container is a react component that has direct connection to state manage by redux
//React-redux is the bridge between React and Redux.  Smart component (container) injects the app. state in component
//The Most parent component that cares about state to be the container. BookList cares about the list of books
//the dumb component, app.js only cares about 'rendering' the view
// ONLY the MOST parent component needs to connect to Redux
