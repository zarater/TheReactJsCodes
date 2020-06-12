import React from 'react';
import './App.css';




function Person(props){
    return (
        <div className="person">
            <h1>{props.name}</h1>
            <p>{props.age}</p>
        </div>
    ); //jsx. looks like html but not
}


export default Person;
