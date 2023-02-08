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
    ]
  }
  render() {
    return (
      <div className='App'>
        <h1>Book List :-</h1>
        <Book bookName={this.state.book[0].bookName} writter={this.state.book[0].writter} />
        <Book bookName={this.state.book[1].bookName} writter={this.state.book[1].writter} />
        <Book bookName={this.state.book[2].bookName} writter={this.state.book[2].writter} />
        <Book bookName={this.state.book[3].bookName} writter={this.state.book[3].writter} />
        <Book bookName={this.state.book[4].bookName} writter={this.state.book[4].writter} />
      </div>
    );
  }
}
export default App;
