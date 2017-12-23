import React, { Component } from 'react'
import * as BooksAPI from './BooksAPI'
import Search from './Search'
import BookList from './BookList'
import { Link } from 'react-router-dom'
import { Route } from 'react-router-dom'
import './App.css'

class BooksApp extends Component {
  state = {
    books: []
  }

  componentDidMount(){
    BooksAPI.getAll().then((books) => {
      this.setState({books})
    })
  }
//check if book works in place of recentbook
  updateShelf = (recentBook, nowShelf) => {
    BooksAPI.update(recentBook, nowShelf).then(response => {
      recentBook.shelf = nowShelf
      var newbooks = this.state.books.filter(book => book.id !== recentBook.id)
      newbooks.push(recentBook);
      this.setState({books: newbooks})
    })
  }

  render() {
    const { books } = this.state;

    return (
      <div className="app">
                <Route path="/search" render={({ history }) => (
                <Search
                  books={books}
                  updateShelf={this.updateShelf}
                />
                )} />
                <Route exact path='/' render={() => (
                  <div className="list-books">
                    <div className="list-books-title">
                      <h1>MyReads</h1><img src="https://png.icons8.com/color/100/ffffff/book-shelf.png"/>
                    </div>
                    <BookList
                    books={books}
                    updateShelf={this.updateShelf}
                  />
              <div className="open-search">
                <Link to='/search'> Search </Link>
              </div>
            </div>
                )} />
          </div>
        )
  }
}

export default BooksApp
