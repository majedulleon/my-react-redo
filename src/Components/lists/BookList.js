import React, { Component } from "react";
import Book from "../representational/Book";

class BookList extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (
            this.props.book.map((book, index) => {
                return (
                    <Book bookName={book.bookName} writter={book.writter}
                        delete={() => this.props.deleteBookstate(index)} key={index}
                        inputName={(event) => this.props.changeWithInput(event, index)} />
                );
            })
        );
    }
}

export default BookList;