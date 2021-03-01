import React from 'react';
import {connect} from 'react-redux';
import {genresListPropTypes} from '../../prop-types';
import {getGenresType} from '../../utils/films';
import {ActionCreator} from '../../store/action';

const GenresList = (props) => {
  const {films, genre, onGenreClick} = props;

  const genreList = getGenresType(films);
  //
  const handleGenreClick = (evt) => {
    evt.preventDefault();
    onGenreClick(evt.target.text);
  };
  return <>
    <ul className="catalog__genres-list">
      {genreList.map((tab, id) => {
        return (
          <li key={tab + id} className={tab === genre ? `catalog__genres-item catalog__genres-item--active` : `catalog__genres-item`}>
            <a href="#" className="catalog__genres-link"
              onClick={handleGenreClick}>
              {tab}
            </a>
          </li>
        );
      })}
    </ul>
  </>;
};

GenresList.propTypes = genresListPropTypes;

const mapStateToProps = (state) => ({
  films: state.films,
  genre: state.genre,
});

const mapDispatchToProps = (dispatch) => ({
  onGenreClick(genre) {
    dispatch(ActionCreator.changeGenre(genre));
  },
});

export {GenresList};
export default connect(mapStateToProps, mapDispatchToProps)(GenresList);
