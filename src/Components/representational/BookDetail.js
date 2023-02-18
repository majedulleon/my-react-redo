import React from "react";

let BookDetail = (props) => {
    console.log(props.book);

    if (props.book === null) return <div><h1>NULL</h1></div>

    return (
        <div>
            <h1>{props.book.bookName}</h1>
            <h3>{props.book.writter}</h3>
            <p>{props.book.description}</p>
        </div>
    );
}

export default BookDetail;