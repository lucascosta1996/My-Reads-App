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
<<<<<<< HEAD
<<<<<<< HEAD
                      <h1>MyReads</h1><img src="https://png.icons8.com/color/100/ffffff/book-shelf.png" alt="Bookshelf icons8"/>
||||||| merged common ancestors
                      <h1>MyReads</h1><img src="https://png.icons8.com/color/100/ffffff/book-shelf.png"/>
=======
                      <h1>MyReads</h1><img src="https://png.icons8.com/color/100/ffffff/book-shelf.png" alt="Bookshelf"/>
>>>>>>> c0782506d3c029c641b17417fe70d20417969d18
||||||| merged common ancestors
                      <h1>MyReads</h1><img src="https://png.icons8.com/color/100/ffffff/book-shelf.png"/>
=======
                      <h1>MyReads</h1><img src="https://png.icons8.com/color/100/ffffff/book-shelf.png" alt="Bookshelf"/>
>>>>>>> c0782506d3c029c641b17417fe70d20417969d18
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
                <div className="icons8"><a href="https://icons8.com">Icon pack by Icons8 <img src="https://png.icons8.com/ios/48/ffffff/icons8-logo-filled.png" alt="Icons8 logo"/></a></div>
          </div>
        )
  }
}

export default BooksApp
