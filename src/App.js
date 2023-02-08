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

  changeBookState = () => {
    this.setState(
      {
        book: [
          { bookName: "1984", writter: "Goerge Orwell" },
          { bookName: "The Da Vinci Code", writter: "Dan Brown" },
          { bookName: "Treasure Island", writter: "Robert Luis Stevenson" },
          { bookName: "Farenhite 451", writter: "Goerge Orwell" },
          { bookName: "Amphibian Man", writter: "Alexander Belaiev" }
        ]
      }
    )
  }

  changeWithInput = (event) => {
    this.setState(
      {
        book: [
          { bookName: event.target.value, writter: "Goerge Orwell" },
          { bookName: "The Da Vinci Code", writter: "Dan Brown" },
          { bookName: "Treasure Island", writter: "Robert Luis Stevenson" },
          { bookName: "Farenhite 451", writter: "Goerge Orwell" }
        ]
      }
    )
  }

  render() {
    console.log(this.state);
    return (
      <div className='App'>
        <h1 className='title'>Book List :-</h1>
        <button onClick={this.changeBookState}>Change StatE</button> <br />
        <input type="text" onChange={this.changeWithInput}></input>
        <Book bookName={this.state.book[0].bookName} writter={this.state.book[0].writter} inputName={this.changeWithInput} />
        <Book bookName={this.state.book[1].bookName} writter={this.state.book[1].writter} />
        <Book bookName={this.state.book[2].bookName} writter={this.state.book[2].writter} />
        <Book bookName={this.state.book[3].bookName} writter={this.state.book[3].writter} />
      </div>
    );
  }
}
export default App;
