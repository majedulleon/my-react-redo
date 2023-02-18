import React, { Component } from "react";
import book from "../assets/book";
import BookList from "./lists/BookList";
import NewBook from "./representational/NewBook";
import BookDetail from "./representational/BookDetail";
import { Route, NavLink, Switch, Redirect } from 'react-router-dom';


class MainComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            book: book,
            selectedBook: null
        }
    }

    selectedBookHandler = (bookId) => {
        let book = this.state.book.filter((book) => book.id === bookId)[0];
        this.setState({
            selectedBook: book
        })
    }

    render() {

        let books = <BookList book={this.state.book}
            selectedBookHandler={this.selectedBookHandler} />

        return (
            <div className='App' >
                <nav className="nav-bar">
                    <ul>
                        <li><NavLink to="/" exact>Home</NavLink></li>
                        <li><NavLink to="/new-book">New Book</NavLink></li>
                    </ul>
                </nav>
                <Switch>
                    <Route path="/" exact render={() => books} />
                    <Route path="/new-book" exact component={NewBook} />
                    <Route path="/:id" render={() => <BookDetail book={this.state.selectedBook} />} />
                    <Redirect from="/" to="/new-book" />
                </Switch>
            </div >


        );
    }

}

export default MainComponent;