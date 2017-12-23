import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ShelfChange extends Component {
  static propTypes = {
    book: PropTypes.object.isRequired,
    books: PropTypes.array.isRequired,
    updateShelf: PropTypes.func.isRequired,
  }

  render() {
    const { book, updateShelf, books } = this.props

    let presentShelf = 'none'

    // if book is in current list, set current shelf to book.shelf
    for (let item of books ) {
      if (item.id === book.id)  {
        presentShelf = item.shelf;

      }
    }

    return (
      <div className="book-shelf-changer">
        <select  onChange={(event) => updateShelf(book, event.target.value)}
          defaultValue={ presentShelf }>
          <option value="none" disabled>Move to...</option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
          <option value="none">None</option>
        </select>
      </div>
    )
  }

}

export default ShelfChange
