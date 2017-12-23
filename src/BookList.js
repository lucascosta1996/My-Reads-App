import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Shelf from './Shelf'

class BookList extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    updateShelf: PropTypes.func.isRequired
  }


  render(){
    const { books, updateShelf } = this.props;
    const shelfs = [
      {type: 'currentlyReading', name: 'Currently Reading'},
      {type: 'wantToRead', name: 'Want to Read'},
      {type: 'read', name: 'Read'}
    ]
    return(
      <div className="list-books-content">
        {shelfs.map((shelf, index) => {
          const booksOfshelf = books.filter(book => book.shelf === shelf.type)
          return (
        <div className="bookshelf" key={index}>
          <h2 className="bookshelf-title">{ shelf.name }</h2>
          <div className="bookshelf-books">
                <Shelf
                      books={ booksOfshelf }
                      updateShelf={ updateShelf }
                    />
          </div>
        </div>
       )
    })}
</div>
)
}
}


export default BookList
