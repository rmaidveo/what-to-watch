import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import {data} from './consts';

ReactDOM.render(
    <App filmsList ={data.films} poster = {data.poster}/>,
    document.querySelector(`#root`)
);
