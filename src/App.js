import React, { Component } from 'react';
import Book from './Components/Book';
import './App.css';

class App extends Component {
  state = {
    book: [
      { bookName: "1984", writter: "Goerge Orwell" },
      { bookName: "The Da Vinci Code", writter: "Dan Brown" },
      { bookName: "New Moon", writter: "Stephanie Meyer" },
      { bookName: "Farenhite 451", writter: "Goerge Orwell" },
      { bookName: "Amphibian Man", writter: "Alexander Belaiev" }
    ],
    showBooks: true
  }

  changeWithInput = (event, index) => {
    let books = { ...this.state.book[index] }
    books.bookName = event.target.value;

    let book = [...this.state.book];
    book[index] = books;
    this.setState({ book: book });  //Tricky
  }

  deleteBookstate = (index) => {
    let books = this.state.book;
    books.splice(index, 1);
    this.setState({
      books: books
    });
  }

  togglebooks = () => {
    this.setState({ showBooks: !this.state.showBooks })
  }

  render() {

    //Very Confusing 4 M3
    let books = null;
    if (this.state.showBooks) {
      books = this.state.book.map((book, index) => {
        return (
          <Book bookName={book.bookName} writter={book.writter}
            delete={() => this.deleteBookstate(index)} key={index}
            inputName={(event) => this.changeWithInput(event, index)} />
        );
      });
    }


    return (
      <div className='App'>
        <h1 className='title'>Book List :-</h1>
        <button onClick={this.togglebooks}>Toggle ButtoN</button>
        {books}
      </div>
    );
  }
}
export default App;
