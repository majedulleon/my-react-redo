import React from "react";
import '../representational/Book.css';

let Book = (props) => {
    return (
        <div className="container">
            <div className="Book" onClick={props.selectedBookHandler}>
                <h3>Book Name: {props.bookName}</h3>
                <h4>Author: {props.writter}</h4>

                <p></p>
            </div>
        </div>
    );
}

export default Book;