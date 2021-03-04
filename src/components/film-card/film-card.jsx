import React, {useState, useEffect} from 'react';
import {filmPreviewPropTypes} from '../../prop-types';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import VideoPlayer from '../video-player/video-player';

const TIMEOUT = 1000;

const FilmCard = (props) => {
  const [activeFilm, setActiveFilm] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const {film} = props;
  let timer;

  useEffect(() => {
    timer = setTimeout(() => {
      if (activeFilm) {
        setIsPlaying(!isPlaying);
      }
    }, TIMEOUT);
    return () => {
      clearTimeout(timer);
    };
  }, [activeFilm]);

  const handleMouseEnter = () => {
    setActiveFilm(film);
  };

  const handleMouseLeave = () => {
    setActiveFilm(null);
    setIsPlaying(false);
  };

  return (
    <>
      <article className="small-movie-card catalog__movies-card" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <Link to={`/films/${film.id}`}>
          <div className="small-movie-card__image">
            {isPlaying ? <VideoPlayer isPlaying={isPlaying} src={film.previewVideoLink} preview={film.previewImageSrc} /> : <img src={film.previewImageSrc} alt={film.name} width="280" height="175" /> }
          </div>
        </Link>
        <h3 className="small-movie-card__title">
          <Link className="small-movie-card__link" to={`/films/${film.id}`}>{film.name}</Link>
        </h3>
      </article>
    </>
  );
};

FilmCard.propTypes = PropTypes.shape(filmPreviewPropTypes).isRequired;
export default FilmCard;
