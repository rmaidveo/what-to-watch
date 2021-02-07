import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

const Data = {
  films: [
    {
      id: 0,
      title: `Fantastic Beasts: The Crimes of Grindelwald`,
      imageSrc: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`
    },
    {
      id: 1,
      title: `Bohemian Rhapsody`,
      imageSrc: `img/bohemian-rhapsody.jpg`
    },
    {
      id: 2,
      title: `Macbeth`,
      imageSrc: `img/macbeth.jpg`
    },
    {
      id: 3,
      title: `Aviator`,
      imageSrc: `img/aviator.jpg`
    },
    {
      id: 4,
      title: `We need to talk about Kevin`,
      imageSrc: `img/we-need-to-talk-about-kevin.jpg`
    },
    {
      id: 5,
      title: `What We Do in the Shadows`,
      imageSrc: `img/what-we-do-in-the-shadows.jpg`
    },
    {
      id: 6,
      title: `Revenant`,
      imageSrc: `img/revenant.jpg`
    },
    {
      id: 7,
      title: `Johnny English`,
      imageSrc: `img/johnny-english.jpg`
    },
    {
      id: 8,
      title: `Shutter Island`,
      imageSrc: `img/shutter-island.jpg`
    },
    {
      id: 9,
      title: `Pulp Fiction`,
      imageSrc: `img/pulp-fiction.jpg`
    },
    {
      id: 10,
      title: `No Country for Old Men`,
      imageSrc: `img/no-country-for-old-men.jpg`
    },
    {
      id: 11,
      title: `Snatch`,
      imageSrc: `img/snatch.jpg`
    },
    {
      id: 12,
      title: `Moonrise Kingdom`,
      imageSrc: `img/moonrise-kingdom.jpg`
    },
    {
      id: 13,
      title: `Seven Years in Tibet`,
      imageSrc: `img/seven-years-in-tibet.jpg`
    },
    {
      id: 14,
      title: `Midnight Special`,
      imageSrc: `img/midnight-special.jpg`
    },
    {
      id: 15,
      title: `War of the Worlds`,
      imageSrc: `img/war-of-the-worlds.jpg`
    },
    {
      id: 16,
      title: `Dardjeeling Limited`,
      imageSrc: `img/dardjeeling-limited.jpg`
    },
    {
      id: 17,
      title: `Orlando`,
      imageSrc: `img/orlando.jpg`
    },
    {
      id: 18,
      title: `Mindhunter`,
      imageSrc: `img/mindhunter.jpg`
    },
    {
      id: 19,
      title: `Midnight Special`,
      imageSrc: `img/midnight-special.jpg`
    },
  ],
  poster: {
    title: `The Grand Budapest Hotel`,
    genre: `Drama`,
    year: 2014
  }
};

ReactDOM.render(
    <App filmsList ={Data.films} poster = {Data.poster}/>,
    document.querySelector(`#root`)
);
