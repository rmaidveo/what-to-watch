import React from 'react';
import PropTypes from 'prop-types';
import MainScreen from '../main-screen/main-screen';

const App = ({filmsList, poster}) => {
  return (
    <MainScreen filmsList={filmsList} poster={poster}/>
  );
};

App.propTypes = {
  filmsList: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        imageSrc: PropTypes.string.isRequired
      })
  ).isRequired,
  poster: PropTypes.shape({
    title: PropTypes.number.isRequired,
    genre: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired
  }).isRequired
};

export default App;
