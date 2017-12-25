import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import * as BooksAPI from './BooksAPI'
import Book from './Book'

class Search extends Component{
  static propTypes = {
    books: PropTypes.array.isRequired,
    updateShelf: PropTypes.func.isRequired
  }
  state = {
    query: '',
    searchedBooks: []
  }

  searchBooks = (event) => {
    const query = event.target.value.trim()
    this.setState({ query: query })

    if (query) {
      BooksAPI.search(query, 20).then((books) => {
        books.length > 0 ? this.setState({searchedBooks: books}) : this.setState({searchedBooks: []})
      })
    }else this.setState({searchedBooks: []})
  }

  render(){
    const { query, searchedBooks } = this.state
    const { books, updateShelf } = this.props
    return(
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search"  to="/">Close</Link>
          <div className="search-books-input-wrapper">

            <input type="text"
              placeholder="Search by title or author"
              value={query}
              onChange={this.searchBooks}
              />

          </div>
        </div>
        <div className="search-books-results">
          { searchedBooks.length > 0  && (
            <ol className="books-grid">
              {searchedBooks.map((book) => (
                <Book
                  book={book}
                  books={books}
                  key={book.id}
                  updateShelf={updateShelf}
                />
              ))}
            </ol>
          ) }

        </div>
      </div>
    )
  }
}
export default Search
