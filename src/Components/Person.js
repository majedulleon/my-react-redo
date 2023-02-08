import React, { Component } from "react";

let Person = (props) => {
    console.log(props);
    return (
        <div>
            <h3>Name: {props.name} & Age: {props.age} years OLD</h3>
            <h4>Extra Info: {props.children}</h4>
        </div>
    );
}


export default Person;