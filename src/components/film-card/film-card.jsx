import React from 'react';
import PropTypes from 'prop-types';

const FilmCard = ({film}) => {

  return (
    <>
      <article className="small-movie-card catalog__movies-card">
        <div className="small-movie-card__image">
          <img src={film.imageSrc} alt= {film.title} width="280" height="175" />
        </div>
        <h3 className="small-movie-card__title">
          <a className="small-movie-card__link" href="movie-page.html">{film.title}</a>
        </h3>
      </article>
    </>
  );
};

FilmCard.propTypes = {
  film:
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.osRequired,
        imageSrc: PropTypes.string.isRequired
      })
};
export default FilmCard;
