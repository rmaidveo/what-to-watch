import React from 'react';
import FilmCard from './film-card/film-card';
import {dataPropTypes} from '../prop-types';

const FilmsList = (props) => {
  const [activeFilm, setActiveFilm] = React.useState(0);
  const {films} = props;
  const onMouseEnter = (id) => {
    setActiveFilm(id);
  };
  return (
    <div className="catalog__movies-list">
      {films.map((film) =>
        <FilmCard key={film.id} film={film} activeFilm={activeFilm} onMouseEnter={()=>onMouseEnter(film.id)} />
      )}
    </div>
  );
};

FilmsList.propTypes = dataPropTypes;
export default FilmsList;
