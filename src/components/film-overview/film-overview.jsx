import React from 'react';
import {dataPropTypes} from '../../prop-types';
import {getRating} from '../../utils/films';
import {StarList} from '../../consts.js';

const FilmOverview = (props) => {
  const {film} = props;
  return (
    <>
      <div className="movie-rating">
        <div className="movie-rating__score">{film.rating}</div>
        <p className="movie-rating__meta">
          <span className="movie-rating__level">{getRating(film.rating)}</span>
          <span className="movie-rating__count">{film.scoresCount + ` ratings`}</span>
        </p>
      </div>

      <div className="movie-card__text">
        <p>{film.description}</p>
        <p>Gustave prides himself on providing first-class service to the hotel&apos;s guests, including satisfying the sexual needs of the many elderly women who stay there. When one of Gustave&apos;s lovers dies mysteriously, Gustave finds himself the recipient of a priceless painting and the chief suspect in her murder.</p>
        <p className="movie-card__director"><strong>Director: {film.director}</strong></p>
        <p className="movie-card__starring"><strong>Starring: {film.starring.length > 3 ? film.starring.slice(StarList.MIN, StarList.MAX).join(`, `) + `and other` : film.starring.join(`, `)}</strong></p>
      </div>
    </>
  );
};

FilmOverview.propTypes = dataPropTypes;
export default FilmOverview;
