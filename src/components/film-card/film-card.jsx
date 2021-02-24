import React, {useState} from 'react';
import {dataPropTypes} from '../../prop-types';
import {Link} from 'react-router-dom';
import VideoPlayer from '../video-player/video-player';

const FilmCard = (props) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const {film} = props;
  let timer;

  const handleMouseEnter = () => {
    timer = setTimeout(() => {
      setIsPlaying(true);
    }, 1000);
  };
  const handleMouseLeave = () => {
    clearTimeout(timer);
    setIsPlaying(false);
  };

  return (
    <>
      <article className="small-movie-card catalog__movies-card" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <VideoPlayer isPlaying={isPlaying} src={film.videoLink} preview={film.previewImageSrc} />
        <h3 className="small-movie-card__title">
          <Link className="small-movie-card__link" to={`/films/${film.id}`}>{film.name}</Link>
        </h3>
      </article>

    </>
  );
};

FilmCard.propTypes = dataPropTypes;
export default FilmCard;
