import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import GenresList from '../genres-list/genres-list';
import FilmsList from '../films-list/films-list';
import ShowMoreButton from '../show-more-button/show-more-button';
import {filmListPropTypes} from '../../prop-types';
import {getSortByGenre, getVisibleFilms} from '../../store/films/selectors';
import {showMoreFilms} from '../../store/actions';

const Catalog = (props) => {
  const {films, visibleFilms, onShowMoreButtonClick} = props;

  return (
    <>
      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>
        <GenresList />
        <FilmsList films={films.slice(0, visibleFilms)}/>
        {visibleFilms < films.length && <ShowMoreButton onButtonClick={onShowMoreButtonClick} />}
      </section>
    </>
  );
};

Catalog.propTypes = {
  films: filmListPropTypes,
  visibleFilms: PropTypes.number.isRequired,
  onShowMoreButtonClick: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  films: getSortByGenre(state),
  visibleFilms: getVisibleFilms(state)
});
const mapDispatchToProps = (dispatch) => ({
  onShowMoreButtonClick() {
    dispatch(showMoreFilms());
  },
});

export {Catalog};
export default connect(mapStateToProps, mapDispatchToProps)(Catalog);
