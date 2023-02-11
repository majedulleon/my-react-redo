import React, { Component } from "react";
import booklists from "../assets/booklists";
import BookList from "./lists/BookList";

class MainComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            book: booklists,
            showBooks: true
        }
        console.log("MainComponent class CalleD");
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
    componentWillMount() {
        console.log("MainComponent WillMount");
    }

    componentDidMount() {
        console.log("MainComponent DidMount");
    }

    render() {

        console.log("Render Called");

        //Very Confusing 4 M3
        let books = null;
        if (this.state.showBooks) {
            books = <BookList book={this.state.book}
                deleteBookstate={this.deleteBookstate}
                changeWithInput={this.changeWithInput} />
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

export default MainComponent;