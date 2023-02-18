import React, { Component } from "react";
import Book from "../representational/Book";
import { Link } from "react-router-dom";

class BookList extends Component {

    render() {

        return (
            this.props.book.map((book, index) => {
                return (
                    <Link to={"/" + book.id} key={book.id}
                        style={{ textDecoration: "none", color: "black" }}>
                        <Book bookName={book.bookName}
                            writter={book.writter}
                            selectedBookHandler={() => this.props.selectedBookHandler(book.id)} />
                    </Link>

                );
            })
        );
    }
}

export default BookList;