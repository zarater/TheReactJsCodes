import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Person from './App';
import * as serviceWorker from './serviceWorker';


ReactDOM.render(<Person name="Max" age="28" />,
    document.querySelector("#hook1"));

ReactDOM.render(<Person name="Man" age="29" />,
    document.querySelector("#hook2"));





// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
