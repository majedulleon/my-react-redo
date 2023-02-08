import React from "react";

let Book = (props) => {
    return (
        <div className="container">
            <div className="block">
                <h3 onClick={props.delete}>Book Name: {props.bookName}</h3>
                <h4>Author: {props.writter}</h4>
                <input type="text" onChange={props.inputName} value={props.bookName} />
                <p></p>
            </div>
        </div>
    );
}

export default Book;