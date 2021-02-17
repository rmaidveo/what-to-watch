import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import data from './mocks/films';
import reviews from './mocks/reviews';

ReactDOM.render(
    <App films={data.films} promo={data.promo} reviews={reviews} />,
    document.querySelector(`#root`)
);
