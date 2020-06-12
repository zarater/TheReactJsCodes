import ReactDom from "react";
import ReactDom from 'react-dom';

function Person(props){
    return (
        <div className="person">
            <h1>{props.name}</h1>
            <p>{props.age}</p>
        </div>
    ); //jsx. looks like html but not
}

ReactDom.render(<Person name="Max" age="28" />,
    document.querySelector("#hook1"));

ReactDom.render(<Person name="Man" age="29" />,
    document.querySelector("#hook2"));
