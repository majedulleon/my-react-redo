import React, { Component } from "react";
import booklists from "../assets/booklists";
import BookList from "./lists/BookList";
import NewBook from "./representational/NewBook";
import { Route } from 'react-router-dom';


class MainComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            book: booklists

        }
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


    render() {

        let books = <BookList book={this.state.book}
            deleteBookstate={this.deleteBookstate}
            changeWithInput={this.changeWithInput} />



        return (
            <div className='App' >
                <div className="nav-bar">
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/new-book">NeW BooK</a></li>
                    </ul>
                </div>

                <Route path="/" exact render={() => books} />
                <Route path="/new-book" exact render={() => <NewBook />} />

            </div >


        );
    }

}

export default MainComponent;