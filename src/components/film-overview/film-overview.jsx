import React from 'react';
import {dataPropTypes} from '../../prop-types';
import {getRating} from '../../utils/films';
import {StarList} from '../../consts.js';

const FilmOverview = ({film}) => {
  return (
    <>
      <div className="movie-rating">
        <div className="movie-rating__score" data-testid="rating-overview">{film.rating}</div>
        <p className="movie-rating__meta">
          <span className="movie-rating__level">{getRating(film.rating)}</span>
          <span className="movie-rating__count">{film.scoresCount + ` ratings`}</span>
        </p>
      </div>

      <div className="movie-card__text">
        <p>{film.description}</p>
        <p className="movie-card__director"><strong data-testid="director-overview">Director: {film.director}</strong></p>
        <p className="movie-card__starring"><strong data-testid="starring-overview">Starring: {film.starring.length > 3 ? film.starring.slice(StarList.MIN, StarList.MAX).join(`, `) + `and other` : film.starring.join(`, `)}</strong></p>
      </div>
    </>
  );
};

FilmOverview.propTypes = dataPropTypes;
export default FilmOverview;
