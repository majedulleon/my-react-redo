import React, { Component } from "react";
import Book from "../representational/Book";

class BookList extends Component {
    constructor(props) {
        super(props);
        console.log("BookList class Constructor");
    }

    UNSAFE_componentWillMount() {
        console.log("BookList WillMount");
    }

    componentDidMount() {
        console.log("BookList DidMount");
    }

    UNSAFE_componentWillReceiveProps(nextProps) {
        console.log("U BookList componentWillReceiveProps", nextProps);
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log("U BookList shouldComponentUpdate", nextProps, nextState);
        return true;
    }

    UNSAFE_componentWillUpdate(nextProps, nextState) {
        console.log("U BookList ComponentwillUpdate");
    }



    render() {

        console.log("BookList Render");

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