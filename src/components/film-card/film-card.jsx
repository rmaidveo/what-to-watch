import React from 'react';
import {filmPreviewPropTypes} from '../../prop-types';
import {Link} from 'react-router-dom';

const FilmCard = (props) => {
  const {id, name, imageSrc} = props;
  return (
    <>
      <article className="small-movie-card catalog__movies-card">
        <div className="small-movie-card__image">
          <img src={imageSrc} alt={name} width="280" height="175" />
        </div>
        <h3 className="small-movie-card__title">
          <Link className="small-movie-card__link" to={`/films/${id}`}>{name}</Link>
        </h3>
      </article>
    </>
  );
};

FilmCard.propTypes = filmPreviewPropTypes;
export default FilmCard;
