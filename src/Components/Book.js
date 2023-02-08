import React from "react";

let Book = (props) => {
    return (
        <div>
            <h3>Book Name: {props.bookName}</h3>
            <h4>Author: {props.writter}</h4>
            <input type="text" onChange={props.inputName} value={props.bookName} />
            <p></p>
        </div>
    );
}

export default Book;