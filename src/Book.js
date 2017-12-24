import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ShelfChange from './ShelfChange'

class Book extends Component {
  static propTypes = {
    book: PropTypes.object.isRequired,
    books: PropTypes.array.isRequired,
    updateShelf: PropTypes.func.isRequired
  }
  render(){
    const { book, books, updateShelf } = this.props
    return(
      <li>
        <div className="book">
          <div className="book-top">
            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks && book.imageLinks.thumbnail})`}}></div>
            <ShelfChange
              books={ books }
              book={ book }
              updateShelf={ updateShelf }
            />
          </div>
          <div className="book-title">{book.title}</div>
          <div className="book-authors">{book.authors}</div>
        </div>
      </li>
    )
  }
}
export default Book
